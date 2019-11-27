const styles = theme => ({
    credentialsview: {
        paddingTop: '20px',
        maxWidth: '56rem'
    },
    paper: {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
        width: 'auto',
        borderRadius: '0.5rem',
        padding: '0px'
    },
    header: {
        marginTop: '0px',
        marginBottom: '1.25rem',
        lineHeight: '1.25em',
        fontSize: '1.25rem',
        textTransform: 'capitalize'
    },
    tabs: {
        paddingTop: '2rem'
    },
    tabcontent: {
        paddingTop: '1.2rem',
        width: '80%',
    },
    tabcontent_header: {
        fontWeight: 'bold',
    },
    tabcontent_input: {
        height: '3rem',
    },
    '@media (min-width: 768px)': {
        header: {
        fontSize: '1.5rem'
    },
    '@media (min-width: 1024px)': {
        credentials: {
            maxWidth: '60rem'
        }

    }
}
});

export default styles;