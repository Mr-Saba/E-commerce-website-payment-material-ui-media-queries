import { makeStyles } from '@material-ui/core/styles';
import { borderColor } from '@mui/system';

export default makeStyles(() => ({
    layout: {
        width: '60%', 
        margin: '0 auto'
    },
    title: {
        paddingTop: '20px',
        paddingBottom:'20px'
    },
    table: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid #dee0df'
    },
    quantity: {
        display: 'flex',
        marginTop: '20px',
        marginLeft: '55px',
        width: '90px',
        justifyContent: 'space-around',
    },
    tableItem: {
        width: '20%',
        fontWeight: '500'
    },
    checkout: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkoutButton: {
        height: '35px',
        color: '#919191'
    },
    subtotal: {
        paddingTop: '20px',
        paddingBottom: '20px'
    },
    butt: {
        backgroundColor: 'white',
        cursor: 'pointer',
        outline: 'none',
        border: '1px solid grey',
    },
    "@media (max-width:500px)": {
        layout: {
            width: '100%'
        },
        quantity: {
            marginLeft: '0px'
        },
    }
}))