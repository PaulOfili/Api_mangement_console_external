import Color from 'color';

const styles = theme => ({
    overview: {
        paddingTop: '20px'
    },
    gridview: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '20px',
    },
    gridtoolbar: {
        // marginTop
        marginBottom: '23px',
        minWidth: '90%',
        maxWidth: '100%'
    },
    addprojectbtn: {
        float: 'right',
        height: '2.875rem',
        width: '10.8125rem',

    },
    bottomalign: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '17px'
    },
    projectCard: {
        height: '15rem',
        padding: '1rem',
        paddingBottom: 0
    },
    projectDescription: {
        marginTop: '2rem',
        textAlign: 'center',
        height: '4rem',
        padding: 0
    },
    overviewmsg: {
        maxWidth: '50%'
    },
    overviewmsgh1: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '34px',
        lineHeight: '26px',
        textTransform: 'capitalize',
        marginBottom: '17px'
    },
    overviewmsgp: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        opacity: '0.7'
    },
    projectStatus: {
        background: Color('#FC895E').alpha(0.2).string(),
        borderRadius: '40px',
        height: '27px',
        width: '103px'
    },

    projectStatusText: {
        color: '#FC895E',
        marginTop: '0.4rem',
        opacity: '1.0'
    },

    onboarding: {
        marginBottom: '3.125rem'
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
        textTransform: 'capitalise',
    },
    customcard: {
        width: '100%',
        transition: '0.5s ease-in-out',
        '&:hover': {
            transform: 'scale(1.01)',
            '-webkit-transform': 'scale(1.01)',
            '-moz-transform': 'scale(1.01)',
            '-ms-transform': 'scale(1.01)'
        },
        cursor: 'pointer'
    },
    imageoverlay: {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        top: 'auto'
    },
    no_project_container: {
        textAlign: 'center',
        position: 'absolute',
        top: '30%',
        left: '50%',
    },
    marginr45: {
        // marginRight: '40px !important'
    },
    '@media (min-width: 768px)': {
        header: {
            fontSize: '1.5rem'
        },
        gridlist: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))',
            gridGap: '23px'
        },
        projectGridList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))',
            gridGap: '23px'
        }

    },
    '@media (min-width: 1024px)': {
        gridlist: {
            gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))'
        },

        projectGridList: {
            gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))'
        },
        overview: {
            maxWidth: '60rem'
        }
    }
});

export default styles;