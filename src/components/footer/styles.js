import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    footer: {
        marginTop: '15px',
        width: '100%',
        height: '140px',
        backgroundColor: '#dee0df',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    footerItem: {
        display: 'flex'
    },
    Logo: {
        paddingRight: '5px', 
        paddingBottom: '4px'
    },
    ["@media (max-width:500px)"]: { 
        footer: {
            height: '140px',
            flexDirection: 'column',
        },
    }
}))
