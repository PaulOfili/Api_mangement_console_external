const styles = theme => ({
    settings: {
        paddingTop: '20px',
        maxWidth: '538px'
    },
    header: {
        marginTop: '0px',
        marginBottom: '1.25rem',
        lineHeight: '1.25em',
        fontSize: '1.25rem',
        textTransform: 'capitalise'
    },
    // greyBackground: {
    //     background: '#EEEEEE',
    //     border: '1px solid #D5D7DB',
    //     borderRadius: '0.125rem',
    //     '&:focus': {
    //         background: 'white'
    //     }
    // },
    '@media (min-width: 768px)': {
        header: {
        fontSize: '1.5rem'
    },

    // '@media (min-width: 1024px)': {
    //     settings: {
    //         maxWidth: '60rem'
    //     }

    // }
}
});

export default styles;