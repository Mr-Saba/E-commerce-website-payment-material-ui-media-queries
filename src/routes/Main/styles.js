import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    desc: {
        fontSize: '10px',
        opacity: '0.7'
    },
    nameAndPrice: {
        display: "flex", 
        width: '100%', 
        position: "relative"
    },
    price: {
        position: "absolute", 
        right: "0px" 
    },

}))