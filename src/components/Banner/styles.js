const styles = (theme) => ({
    orange: {
        backgroundColor: 'rgb(248, 149, 114)',
    },
    blue: {
       backgroundColor: '#3E55CC', 
    },
    hero: {
        paddingBottom: '1rem',
        color: 'rgb(255, 255, 255)',
        borderRadius: '0.5rem',
    },
    topbar: {
        paddingTop: '1.5rem',
        paddingRight: '1.5rem',
        paddingBottom: '1rem',
        display: 'flex'
    },
    hidebutton: {
        minWidth: 'auto',
        minHeight: 'auto',
        fontWeight: '600',
        padding: '0px',
        marginLeft: 'auto',
        marginRight: '1.5rem',
        height: '1.1rem'
    },
    hidespan: {
        width: '100%',
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit'
    },
    herotext: {
        paddingTop: '2rem',
    },
    herocontent: {

        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        
    },
    herobody: {
        display: 'flex',
        '-webkit-box-pack': 'justify',
        'justifyContent': 'space-between'
    },
    herotext_button_container: {
        position: 'relative',
        top: '0.5625rem'
    },

    herotext_button: {
        fontWeight: '600', 
        textAlign: 'center', 
        height: '3rem', 
        backgroundColor: '#2C2D30', 
        color: [['white'], '!important'], 
        border: 'none',
        '&:hover': {
            background: [['#404145'], '!important'],
    }
    },
    heading: {
        height: '2.6875rem',
        // marginTop: '0px',
        marginBottom: '0.5rem',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '1.75rem',
        lineHeight: '2rem',
        color: '#ffffff'
    },
    text: {
        fontFamily: 'Open Sans',
        fontSize: '0.9375rem',
        lineHeight: '1.625rem',
        height: '6.625rem',
        // marginBottom: '2rem',
        marginTop: '1rem'
    }
})

export default styles;