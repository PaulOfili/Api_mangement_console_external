import React from "react";
import PropTypes from "prop-types";
import {withStyles, Hidden, IconButton, Menu} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import CircularProgress from '@material-ui/core/CircularProgress';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import styles from './styles';
import Toggle from '../../../../components/Toggle/Toggle';
import Profile from '../../../../components/Profile/Profile';

function TopBar({classes, handleDrawerToggle, project, isLoading}) {


        return (
            <AppBar className={classes.topBar}>
                <Toolbar className={classes.toolbar}>
                    <div>
                        {
                            isLoading ? <CircularProgress size={20} color="inherit"/>
                            :
                            <h1 className={classes.appidtext}>APP ID: { project && <span>{project.id}</span>}</h1>
                        }
                    </div>
                    <div className={classes.iconContainer}>
                        <Hidden mdUp>
                            <IconButton
                                open
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                            >
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center'}}>
                        <Toggle />
                        <Profile />
                    </div>
                </Toolbar>
            </AppBar>

        );
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps({ project }) {
    return {
        project: project.item.data,
        isLoading: project.item.isLoading
    }
}


export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(TopBar));
