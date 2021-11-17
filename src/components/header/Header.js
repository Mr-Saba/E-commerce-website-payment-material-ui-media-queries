import React from "react";
import useStyles from "./styles";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Badge,
//   MenuItem,
//   Menu,
//   Typography,
// } from "@material-ui/core";
import { Link } from "react-router-dom";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';


const Header = ({totalItems}) => {

  const scrollOnClick = () => {
    if(window.innerWidth < 500) {
      window.scrollTo({
            top: 1500,
            behavior: "smooth"
        })
    } else {
      window.scrollTo({
            top: 500,
            behavior: "smooth"
        })
    }
}

  const classes = useStyles();

  return (
    <Box>
      <div className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoFragment}>
            <DirectionsBikeIcon fontSize="large" />
            <div className={classes.logoTitle}>BikeStore</div>
          </Link>
          <div className={classes.navItems}>
            <Typography  variant="h6" color="inherit">
              <Link to="/" className={classes.navItem}>
                Home
              </Link>
            </Typography>
            <Typography  variant="h6" color="inherit">
              <Link onClick={() => scrollOnClick()} to="/" className={classes.navItem}>
                Shop
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/about" className={classes.navItem}>
                About
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/contact"  className={classes.navItem}>
                Contact
              </Link>
            </Typography>          
          </div>
          {/* <div className={classes.rightFragment}>
             <Link className={classes.navItem} to="/cart">
               <ShoppingCartIcon/>
             </Link>
         </div> */}
                <IconButton  to="/cart" aria-label="Show cart items" >
                  <Badge badgeContent={totalItems} color="primary">
                    <Link className={classes.cartButton} to="/cart">
                      <ShoppingCartIcon/>
                    </Link>
                  </Badge>
                </IconButton>      
        </Toolbar>
      </div>
    </Box>
  );
};

export default Header;
