const styles = theme => ({
    testconsole: {
        paddingTop: '20px'
    },
    header: {
        marginTop: '0px',
        marginBottom: '1.25rem',
        lineHeight: '1.25em',
        fontSize: '1.25rem',
        textTransform: 'capitalise'
    },
    '@media (min-width: 768px)': {
        header: {
            fontSize: '1.5rem'
        }

    },
    '@media (min-width: 1024px)': {
        testconsole: {
            maxWidth: '60rem'
        }

    }

});

export default styles;