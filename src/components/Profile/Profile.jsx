import React, {useState} from 'react';
import PropTypes from "prop-types";
import cuid from 'cuid';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';
import styles from '../../layouts/components/Sidebar/styles';


var PASSPORT = process.env.REACT_APP_PASSPORT;
var CLIENTID = process.env.REACT_APP_CLIENT_ID;
var BASE_URL = process.env.REACT_APP_BASE_URL;

if(process.env.NODE_ENV !== 'development'){
    PASSPORT = window._env_.REACT_APP_PASSPORT;
    CLIENTID = window._env_.REACT_APP_CLIENT_ID;
    BASE_URL = window._env_.REACT_APP_BASE_URL;

}

function Profile({ classes, user }){
    
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.profileContainer} onClick={toggleOpen}>
            <div className={classes.profileHandle}>
                <div title={user.email} className={classes.avatar}>
                    <div color="secondary" className={classes.circle}>
                        <svg fontSize="xsmall" viewBox="0 0 20 20" className={classes.svg}>
                            <path d="M13.7,10.72A6,6,0,1,0,10,12a8,8,0,0,1,8,8h2A10,10,0,0,0,13.7,10.72ZM10,10a4,4,0,1,1,4-4A4,4,0,0,1,10,10Z"></path>
                            <path d="M4,14.66,2.5,13.34A10.15,10.15,0,0,0,0,20H10V18H2.26A8,8,0,0,1,4,14.66Z"></path>
                        </svg>
                    </div>
                </div>
                <div title={user.email} className={classes.title}>{`${user.firstName} ${user.lastName}`}</div>
                {
                    open ?
                    <svg direction="up" fontSize="small" className={`${classes.directionsvg} ${classes.up}`} viewBox="0 0 20 20" data-test="chevron-icon"><polyline points="2 6 10 14 18 6"></polyline></svg>
                    :
                    <svg direction="down" fontSize="small" className={`${classes.directionsvg} ${classes.down}`} viewBox="0 0 20 20" data-test="chevron-icon"><polyline points="2 6 10 14 18 6"></polyline></svg>
                }
            </div>   
            <div className={open ? classes.profileMenuOpen : classes.profileMenuClosed}>
                <span  className={classes.logout} >
                    <form action={`${PASSPORT}/logout`} style={{display:"flex"}} method='get'>
                        <input type='text' name='client_id' value={CLIENTID} readOnly hidden/>
                        <input type='text' name='redirect_uri' value={BASE_URL} readOnly hidden/>
                        <input type='text' name='response_type' value='token' readOnly hidden/>
                        <input type='text' name='scope' value='profile' readOnly hidden/>
                        <input type='text' name='state' value={cuid()} readOnly hidden/>
                        <button type='submit' style={{margin: '0 auto'}} className="ant-btn header-link header-signin">Sign Out</button>
                    </form>
                </span>
            </div>       
        </div>
    );
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user.auth.userData
    }
}   

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(Profile));