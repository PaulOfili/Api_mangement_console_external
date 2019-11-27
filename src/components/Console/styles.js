const styles = theme => ({
    testinput: {
        height: '51px !important'
    },
    testbutton: {
        height: '49px',
        borderRadius: '0 !important',
        width: '116px',
    },
    consoleviewwrapper: {
        marginTop: '15px',
        position: 'relative'
    },
    consolecontent: {
        display: 'flex',
    },
    overlay: {
        position: 'absolute', /* Sit on top of the page content */
        width: '100%', /* Full width (cover the whole page) */
        height: '100%', /* Full height (cover the whole page) */
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)', /* Black background with opacity */
        zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */
        cursor: 'pointer', /* Add a pointer on hover */
    },
    overlaybutton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '5',
        color: 'white',
        transform: 'translate(-50%,-50%)',
        '-ms-transform': 'translate(-50%,-50%)'
      },
      filter: {
        filter: 'blur(3px)'
      }
})


export default styles;
