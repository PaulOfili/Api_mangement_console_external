const styles = theme => ({
    titleText: {
        fontFamily: 'Open Sans',
        fontSize: "0.875rem",
        fontWeight: 700,
        letterSpacing: '-0.015rem',
        color: 'black',
        lineHeight: '1.5rem',
    },
    closeButton: {
        fontFamily: 'Open Sans',
        fontSize: "24px",
        fontWeight: 700,
        color: theme.palette.dark,
        cursor: "pointer"
    },
    taskBody: {
        border: '1px solid #E8EAED',
        background: '#FBFBFB',
        padding: '0.4375rem 0.875rem',
        height: '74px',
        marginBottom: '1.1875rem',
    },
    taskContent: {

    },
    taskHeader: {
        fontFamily: 'Open Sans',
        color: '#404145',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '-0.015rem',
        fontWeight: 'normal',
        fontStyle: 'normal'
    },
    taskText: {
        fontFamily: 'Open Sans',
        color: "rgba(64, 65, 69, 0.6)",
        lineHeight: '1.125rem',
        letterSpacing: '-0.015rem',
        fontSize: '0.75rem'
    },
    taskStatus: {
        textAlign: '-webkit-right',
        padding: '0.625rem 0'
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    submitButtonText: {
        textTransform: "none",
        fontFamily: "Open Sans",
        fontSize: "16px",
        cursor: "pointer",
        color: theme.palette.primary.main,
        fontWeight: 700
    }

});

export default styles;
