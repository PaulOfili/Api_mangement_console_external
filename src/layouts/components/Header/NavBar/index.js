import React from "react";
import PropTypes from "prop-types";
import {withStyles, Drawer, Hidden, IconButton, Button, Toolbar, AppBar} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import Menu from '@material-ui/icons/Menu';
import cuid from 'cuid';
import { Link }  from 'react-router-dom';
import styles from './styles';
import './style.css';

var PASSPORT = process.env.REACT_APP_PASSPORT;
var CLIENTID = process.env.REACT_APP_CLIENT_ID;
var BASE_URL = process.env.REACT_APP_BASE_URL;

if(process.env.NODE_ENV !== 'development'){
    PASSPORT = window._env_.REACT_APP_PASSPORT;
    CLIENTID = window._env_.REACT_APP_CLIENT_ID;
    BASE_URL = window._env_.REACT_APP_BASE_URL;

}


class NavBar extends React.Component {

    state = {
        mobileOpen: false
    };

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }

    componentDidMount(){
    //   window.addEventListener('scroll', (event) => {
    //     const scrollpos = window.scrollY;
    //      if(scrollpos > 10){
    //        this.setState({
    //           activeClass: 'is-scrolled'
    //        })
    //      }else{
    //          this.setState({
    //             activeClass: 'is-ontop'
    //          })
    //      }
    //   });
    }

    render() {

        const {
            classes,
            brand
        } = this.props;

        const brandComponent =
        <Link to={'/'} className={classes.brand}>
          <img src={brand} alt='Logo' />
        </Link>

        return (
            <div>
                <AppBar className={`mainHeaderHolder ${classes.navBar + ' ' + this.state.activeClass}`}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.flex}>
                            {brandComponent}
                        </div>
                        <Hidden smDown>
                        <div className={`${classes.linksContainer}`}>
                            <a href='http://iswdocs-uat.k8.isw.la' target='_blank' rel='noopener noreferrer' className={classes.navDrawerLink} >
                                API
                            </a>
                            <Link to={`#`} className={classes.navDrawerLink} >
                                Our Community
                            </Link>
                            <Link to={`#`} className={classes.navDrawerLink} >
                                About Us
                            </Link>
                            <span className={classes.navDrawerLink} >
                                <form action={`${PASSPORT}/oauth/authorize`} style={{display:"flex", alignItems: "center", justifyContent: "center"}} method='get'>       
                                    <input type='text' name='client_id' value={CLIENTID} readOnly hidden/>
                                    <input type='text' name='redirect_uri' value={BASE_URL} readOnly hidden/>
                                    <input type='text' name='response_type' value='token' readOnly hidden/>
                                    <input type='text' name='scope' value='profile' readOnly hidden/>
                                    <input type='text' name='state' value={cuid()} readOnly hidden/>
                                    <button type='submit' className={`ant-btn header-link header-signin ${classes.signInButton}`}>Sign In</button>
                                </form>
                            </span>
                            <span className={classes.navDrawerLinkGetStarted}>
                                <form action={`${PASSPORT}/signup`} style={{display:"flex", alignItems: "center", justifyContent: "center"}} method='get'>       
                                    <input type='text' name='client_id' value={CLIENTID} readOnly hidden/>
                                    <input type='text' name='redirect_uri' value={`${BASE_URL}/projects`} readOnly hidden/>
                                    <input type='text' name='response_type' value='token' readOnly hidden/>
                                    <input type='text' name='scope' value='profile' readOnly hidden/>
                                    <input type='text' name='state' value={cuid()} readOnly hidden/>
                                    <button type='submit' className={`ant-btn ant-btn-primary header-btn ${classes.getStartedButton}`}>Get Started</button>
                                </form>
                            </span>
                        </div>
                        </Hidden>
                        <Hidden smUp>
                            <IconButton
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle.bind(this)}
                            >
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={"right"}
                            className="py-12"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle.bind(this)}
                        >
                        <Button classes={{
                                    root: classes.button
                                }}>
                  
                        </Button>
                        <div className={`${classes.linksContainer}`}>
                            <a href='http://iswdocs-uat.k8.isw.la' target='_blank' rel='noopener noreferrer' className={classes.navDrawerLink} >
                                API
                            </a>
                            <Link to={`#`} className={classes.navDrawerLink} >
                                Our Community
                            </Link>
                            <Link to={`#`} className={classes.navDrawerLink} >
                                About US
                            </Link>
                            <span className={classes.navDrawerLink} >
                                <form action={`${PASSPORT}/oauth/authorize`} style={{display:"flex", alignItems: "center", justifyContent: "center"}} method='get'>       
                                    <input type='text' name='client_id' value={CLIENTID} readOnly hidden/>
                                    <input type='text' name='redirect_uri' value={BASE_URL} readOnly hidden/>
                                    <input type='text' name='response_type' value='token' readOnly hidden/>
                                    <input type='text' name='scope' value='profile' readOnly hidden/>
                                    <input type='text' name='state' value={cuid()} readOnly hidden/>
                                    <button type='submit' className="ant-btn header-link header-signin">Sign In</button>
                                </form>
                            </span>
                            <span className={classes.navDrawerLink} >
                                <form action={`${PASSPORT}/signup`} style={{display:"flex", alignItems: "center", justifyContent: "center"}} method='get'>       
                                    <input type='text' name='client_id' value={CLIENTID} readOnly hidden/>
                                    <input type='text' name='redirect_uri' value={`${BASE_URL}/projects`} readOnly hidden/>
                                    <input type='text' name='response_type' value='token' readOnly hidden/>
                                    <input type='text' name='scope' value='profile' readOnly hidden/>
                                    <input type='text' name='state' value={cuid()} readOnly hidden/>
                                    <button type='submit' className="ant-btn ant-btn-primary header-btn">Get Started</button>
                                </form>
                            </span>
                        </div>
                        </Drawer>
                    </Hidden>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    brand: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(null, mapDispatchToProps)(NavBar));
