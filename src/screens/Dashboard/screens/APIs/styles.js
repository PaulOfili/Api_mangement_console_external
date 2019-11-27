const styles = theme => {
    console.log("MY THEME", theme)
    return {
    permissionview: {
        paddingTop: '20px'
    },
    header: {
        marginTop: '0px',
        marginBottom: '1.25rem',
        lineHeight: '1.25em',
        fontSize: '1.25rem',
        textTransform: 'capitalise'
    },
    contentHeading: {
        border: 'solid 1px #E8EAED',
        width: '100%',
        padding: '1rem 1rem 1.5rem 1rem',
        backgroundColor: '#FDFAF7',
        boxSizing:' border-box',
        marginBottom: '2rem',

    },
    sendRequestFooter: {
        display: 'block',
        position: 'fixed',
        paddingTop: '2rem',
        paddingBottom: '2.5rem',
        right: '8rem',
        bottom: 0,
    },
    sendRequestFooterButton: {
        boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.4)'
    },
    '@media (min-width: 768px)': {
        header: {
            fontSize: '1.5rem'
        }

    },
    '@media (min-width: 1024px)': {
        permissionview: {
            maxWidth: 'calc(100% - 2.5rem)'
        }

    }

}};

export default styles;