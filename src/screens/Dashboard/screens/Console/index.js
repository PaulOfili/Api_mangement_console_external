import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './styles';
import Console from '../../../../components/Console/console.component';
import * as credentialsActions from '../../../../store/actions';
import * as tokenActions from '../../../../store/actions';

function TestConsole({ classes, project, getTestCredentials, generateToken, credentials }){

    useEffect(() => {
        if(project && project.id){
            getTestCredentials(project.id)
        }
    }, [getTestCredentials, project])

    return (
        <div className={classes.testconsole}>
            <h1 className={classes.header}>Test Console</h1>
            <Console project={project} credentials={credentials} generateToken={generateToken}/>
        </div>
    );
}

const mapStateToProps = ({ project, credentials }) => {
    return {
        project: project.item.data,
        credentials: credentials.test_credentials.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTestCredentials: credentialsActions.getTestCredentials,
        generateToken: tokenActions.getTestToken
    }, dispatch);
}

TestConsole.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(TestConsole));