const styles = theme => ({
    aside: {
        top: 0,
        flex: '1 0 auto',
        height: '100%',
        display: 'flex',
        zIndex: 1200,
        outline: 'none',
        position: 'fixed',
        overflowY: 'auto',
        flexDirection: 'column'
    },
    asideBg: {
        // backgroundColor: 'rgb(0, 65, 75)'
        backgroundColor: '#F5F5F5'
    },
    flex: {
        flex: '0 0 auto'
    },
    jss405: {
        left: 0,
        right: 'auto'
    },
    borderRight: {
        borderRight: '1px solid rgba(0, 0, 0, 0.12)'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '14.375rem',
        flex: '1 1 0%',
        padding: '1rem'
    },
    brand: {
        display: 'flex',
        "@media (min-width: 1024px)": {
            paddingBottom: "1rem"
          },
    },
    brandLink: {

    },
    brandLogo: {
        height: '2.375rem',
        width: '9rem'
    },
    sidePaths: {
        position: 'relative',
        '-webkit-box-flex': 1,
        flexGrow: 1,
        margin: '0px 0px 2rem',
        padding: '0px',
        listStyle: 'none'
    },
    profileContainer: {
        position: 'relative'
    },
    profileHandle: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(45, 93, 103)',
        fontWeight: 600,
        userSelect: 'none',
        width: '100%',
        position: 'relative',
        display: 'flex',
        '-webkit-box-align': 'center',
        alignItems: 'center',
        marginTop: 'auto',
        zIndex: 2,
        cursor: 'pointer',
        padding: '0.875rem',
        borderRadius: '0.25rem'
    },
    profileMenuClosed: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(45, 93, 103)',
        fontWeight: 600,
        userSelect: 'none',
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        transform: 'scaleY(0)',
        padding: '0.875rem 0.875rem 3rem',
        borderRadius: '0.25rem',
        overflow: 'hidden',
        // transition: 'transform 0.15s ease-out 0s',
    },
    profileMenuOpen: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(45, 93, 103)',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
        fontWeight: 600,
        userSelect: 'none',
        width: '100%',
        position: 'absolute',
        top: '100%',
        bottom: '0px',
        left: '0px',
        transform: 'scaleY(1)',
        padding: '0.875rem 0.875rem 3rem',
        borderRadius: '0.25rem',
        overflow: 'hidden',
        // transition: 'transform 0.15s ease-out 0s',
    },
    logout: {
        display: 'block',
        paddingBottom: '0.75rem',
        paddingTop: '0.75rem',
        opacity: '1',
        color: 'rgb(45, 93, 103)',
        textDecoration: 'none',
        transition: 'opacity 0.15s ease-in 0.15s'
    },
    avatar: {
        marginRight: '0.5rem',
    },
    circle: {
        display: 'flex',
        '-webkit-box-align': 'center',
        alignItems: 'center',
        '-webkit-box-pack': 'center',
        justifyContent: 'center',
        flexShrink: 0,
        height: '2rem',
        width: '2rem',
        backgroundColor: 'rgb(248, 149, 114)',
        borderRadius: '50%'
    },
    svg: {
        fill: 'currentcolor',
        fontSize: '0.75rem',
        height: '1em',
        width: '1em',
    },
    title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginRight: '0.5rem',
        overflow: 'hidden'
    },
    directionsvg:{
        marginLeft: 'auto',
        flexShrink: 0
    },
    down: {
        fill: 'currentcolor',
        fontSize: '0.875rem',
        height: '1em',
        width: '1em',
        transform: 'scaleY(1)',
        transition: 'transform 0.15s ease-in-out 0s'
    },
    up: {
        fill: 'currentcolor',
        fontSize: '0.875rem',
        height: '1em',
        width: '1em',
        transform: 'scaleY(-1)',
        transition: 'transform 0.15s ease-in-out 0s'
    },
    menuitem: {
        position: 'relative',
        display: 'flex',
        '-webkit-box-align': 'center',
        alignItems: 'center',
        '-webkit-box-pack': 'start',
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: '0px',
        textAlign: 'left',
        textDecoration: 'none'
    },
    menuitemchild: {
        position: 'relative',
        display: 'flex',
        '-webkit-box-align': 'center',
        alignItems: 'center',
        // color: 'rgba(255, 255, 255, 0.4)',
        color: '#36454D',
        fontWeight: 600,
        lineHeight: 1,
        width: '100%',
        padding: '0.875rem 1rem',
        textDecoration: 'none',
        
        '&:hover': {
            backgroundColor: 'rgba(123, 149, 168, 0.6)',
            // backgroundColor: 'rgba(196, 196, 196, 0.3)',
            color: '#000000',
        }

    },
    menuitemicon: {
        color: 'inherit',
        display: 'inline-flex',
        flexShrink: 0,
        marginRight: '16px'
    },
    menuitemsvg: {
        fill: 'currentcolor',
        fontSize: '1.25rem',
        height: '1em',
        width: '1em',
    },
    // menuitemtext: {
    //     display: 'inline-block',
    //     verticalAlign: 'super',
    // },
    externalicon: {
        fill: 'currentcolor',
        fontSize: '0.75rem',
        height: '1em',
        width: '1em'
    },
    externaliconposition: {
        position: 'absolute',
        right: '1.5rem'
    },
    menulabel: {
        display: 'block',
        marginTop: '0.5rem',
        // color: 'rgb(255, 255, 255)',
        color: '#36454D',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.0625rem',
        opacity: '0.8',
        padding: '0.875rem 1rem'
    },
    submenu: {
        paddingLeft: '0px'
    },
    appslist: {
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%'
    },
    appswrapper: {
        '-webkit-box-align': 'center',
        alignItems: 'center',
        // backgroundColor: 'rgb(66, 119, 131)',
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        // boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
        cursor: 'pointer',
        display: 'flex',
        flexWrap: 'wrap',
        '-webkit-box-pack': 'justify',
        justifyContent: 'space-between',
        minHeight: '38px',
        position: 'relative',
        boxSizing: 'border-box',
        borderRadius: '0.25rem 0.25rem 0 0',
        transition: 'all 100ms ease 0s',
        padding: '0.75rem',
        borderWidth: '0px',
        borderStyle: 'initial',
        borderColor: 'initial',
        borderImage: 'initial',
        outline: '0px !important'
    },
    appslistcontent: {
        '-webkit-box-align': 'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        boxSizing: 'border-box',
        flex: '1 1 0%',
        padding: '2px 8px',
        overflow: 'hidden'
    },
    appslisticon: {
        fill: 'rgb(0, 0, 0)',
        fontSize: '1.25rem',
        height: '1em',
        width: '1em'
    },
    active : {
        background: 'rgba(196, 196, 196, 0.1)',
    },
    appslistselect: {
        color: 'rgb(0, 0, 0)',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        boxSizing: 'border-box',
        paddingLeft: '2.3rem',
        textOverflow: 'ellipsis',
        textTransform: 'capitalize',
        fontWeight: 600,
        margin: '0px',
        maxWidth: '90%',
        overflow: 'hidden'
    },
    appslistdirection: {
        '-webkit-box-align': 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        display: 'flex',
        flexShrink: 0,
        boxSizing: 'border-box',
    },
    appslistinput: {
        fontSize: 'inherit',
        width: '1px',
        color: 'transparent',
        left: '-100px',
        opacity: 0,
        position: 'relative',
        transform: 'scale(0)',
        background: '0px center',
        borderWidth: '0px',
        borderStyle: 'initial',
        borderColor: 'initial',
        borderImage: 'initial',
        outline: '0px',
        padding: '0px'
    },
    listdirectionsvg: {
        fill: 'rgb(255, 255, 255)',
        fontSize: '0.875rem',
        height: '1em',
        width: '1em'
    },
    projectsMenuClosed: {
        // backgroundColor: 'rgb(66, 119, 131)',
        // color: 'rgb(255, 255, 255)',
        fontWeight: 600,
        userSelect: 'none',
        width: '100%',
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        transform: 'scaleY(0)',
        padding: '0.875rem',
        borderRadius: '0.25rem',
        overflow: 'hidden',
    },
    projectsMenuOpen: {
        // backgroundColor: 'rgb(66, 119, 131)',
        backgroundColor: '#BABDC2',
        // color: 'rgb(255, 255, 255)',
        color: '#000000',
        fontWeight: 600,
        userSelect: 'none',
        width: '100%',
        position: 'absolute',
        top: '100%',
        left: '0px',
        transform: 'scaleY(1)',
        zIndex: 1,
        // padding: '0.875rem',
        borderRadius: '0 0 0.25rem 0.25rem'
    },
    textempty: {
        color: '#404145',
        minHeight: '2.7rem',
        lineHeight: '3.5rem'
    },
    project: {
        flex: '1 1 0%',
        display: 'flex',
        padding: '0.75rem',
        overflow: 'hidden',
        position: 'relative',
        // borderRadius: '0.25rem',
        flexWrap: 'wrap',
        // backgroundColor: 'rgb(149, 169, 182)',
        boxSizing: 'border-box',
        alignItems: 'center',
        textTransform: 'capitalize',
        '-webkit-box-align': 'center',
        minHeight: '38px',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: 'rgba(123, 149, 168, 1)'
        }
    },

    sideBarCreateProjectButton: {
        border: 'none',
        '&:hover': {

        }
    },
    createtab: {
        borderTop: '1px solid #ffffff'
    },
    '@media (max-width: 768px)': {
        profileContainer: {
            float: 'left'
        },
        profileHandle: {
            padding: '0.875rem 0px', 
        }
      },
});

export default styles;
