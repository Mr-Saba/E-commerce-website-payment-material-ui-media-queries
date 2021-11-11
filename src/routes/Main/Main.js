import useStyles from "./styles";
import React, { useState, useEffect } from 'react'
//import { ClassNames } from "@emotion/react";
import { commerce } from '../../lib/commerce'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Main = ({ products, onAddToCart }) => {


    const classes = useStyles()

    useEffect(() => {

    }, [])

    if (!products) return 'Loading';

    return (
        <>  
            <h1>Recently added</h1>
            <Grid container spacing={3}>
                {products && products.slice().sort((a, b) => b.created - a.created).slice(0, 4).map(item => {
                    return (
                        <Grid lg={3} item>
                            <Card> 
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image.url}
                                    alt="green iguana"                                   
                                />
                                <CardContent>
                                    <div className={classes.nameAndPrice}>
                                        <Typography style={{fontWeight: "600"}} gutterBottom component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography className={classes.price} gutterBottom component="div">
                                            {item.price.raw}ლ
                                        </Typography>
                                    </div>
                                    <Typography gutterBottom component="div">
                                        <div className={classes.desc}>{item.description.slice(3, 240)}...</div>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" style={{margin: "0 auto", color: 'black'}} onClick={() => onAddToCart(item.id, 1)} size="small">Add TO Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid> 

            <h1>All</h1>
            <Grid container spacing={3}>
                {products && products.map(item => {
                    return (
                        <Grid lg={3} item >
                            <Card> 
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image.url}
                                    alt="green iguana"                                   
                                />
                                <CardContent>
                                    <div className={classes.nameAndPrice}>
                                        <Typography style={{fontWeight: "600"}} gutterBottom component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography className={classes.price} gutterBottom component="div">
                                            {item.price.raw}ლ
                                        </Typography>
                                    </div>
                                    <Typography gutterBottom component="div">
                                        <div className={classes.desc}>{item.description.slice(3, 240)}...</div>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" style={{margin: "0 auto", color: 'black'}} onClick={() => onAddToCart(item.id, 1)} size="small">Add TO Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
        </>
    )
}

export default Main
