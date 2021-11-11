import React from 'react'
import useStyles from "./styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <nav className={classes.footer}>
            <li className={classes.footerItem}>
                <LocationOnIcon className={classes.Logo}/>
                <div className={classes.Location}>
                    <div>Tbilsi, Georgia</div>
                    <div style={{opacity: '0.9', fontSize: "12px"}}>
                        Chavchavadze St.15
                    </div>
                </div>
            </li> 
            <li className={classes.footerItem}>
                    <PhoneIcon className={classes.Logo}/>
                    <div>+995 555 123 456</div>
                </li> 
            <li className={classes.footerItem}>
                    <EmailIcon className={classes.Logo}/>
                    <div>support@company.com</div>
                </li> 
            </nav>
        </React.Fragment>
    )
}

export default Footer
