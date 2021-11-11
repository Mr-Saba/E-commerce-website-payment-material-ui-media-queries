import { makeStyles } from '@material-ui/core/styles';
import { useTheme} from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const ThemeReturner = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return matches;
}
export default makeStyles((ThemeReturner) => ({
    appBar: {
        backgroundColor: '#dee0df',
    },
    toolbar: {
        height: '60px',
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',      
    },
    logoFragment: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
        color: "black",
        textDecoration: "none",
        letterSpacing: '1px',
    },
    logoTitle: {
        fontSize: '14px',
        fontWeight: '600',
    },
    navItems: {
        listStyle: 'none',
        display: 'flex',
        width: '90%',
        justifyContent: 'space-around'
    },
    cartButton: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer' 
    },
    navItem: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer'
    },
    rightFragment: {
        display: 'flex',
        justifyContent:'center',
        width: "20%"
    },
    "@media (max-width:500px)": { 
        toolbar: {     
            height: '120px',            
        },
        navItems: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)'
        },
        navItem: {
            paddingLeft: '40px',
            paddingRight: '10px'
        },
    }
}))
