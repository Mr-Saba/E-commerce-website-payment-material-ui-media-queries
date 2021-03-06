import React, {useEffect} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';


import useStyles from "./styles";

const Cart = ({cart, onRemoveFromCart, onUpdateCartQuantity}) => {

    const classes = useStyles()
    
    useEffect(() => {
    }, [])

    if (!cart.line_items) return 'Loading';

    return (
        cart.line_items.length > 0 ?
            <div className={classes.layout}>
                <Typography className={classes.title} gutterBottom component="div">
                    Shopping Bag
                </Typography>
                <TableContainer>
                    <Table>                  
                        <TableBody>
                            {cart.line_items.map(item => {
                            return( 
                                <TableRow
                                className={classes.table}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <th className={classes.tableItem}><ClearIcon style={{cursor: 'pointer'}} onClick={() => onRemoveFromCart(item.id)}/></th>
                                <th className={classes.tableItem}><img width='100px' height='60px' src={item.image.url} /></th>
                                <th className={classes.tableItem}>{item.name}</th>
                                <th className={classes.quantity}>
                                <button className={classes.butt} onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}>+</button>
                                <div>{item.quantity}</div> 
                                <button className={classes.butt} onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}>-</button>
                                </th>
                                <th className={classes.tableItem}>{item.quantity * item.price.raw}???</th>
                                </TableRow>
                            )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className={classes.checkout}>
                    <Typography className={classes.subtotal} gutterBottom component="div">
                        Subtotal: {cart.subtotal.raw}???
                    </Typography>
                    <Link style={{textDecoration: "none"}} to="./checkout">
                    <Button style={{color: 'black'}} variant="outlined" className={classes.checkoutButton}>
                        checkout
                    </Button>
                    </Link>
                </div>
            </div> 
        : <h1 style={{display: 'flex', justifyContent: 'center'}}>There is no items in cart</h1>    
    )
}

export default Cart
