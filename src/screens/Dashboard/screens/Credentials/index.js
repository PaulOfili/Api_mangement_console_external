import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import * as projectActions from '../../../../store/actions';
import Banner from '../../../../components/Banner/Banner';
// import welcome from '../../../../assets/images/welcome.svg';
import credentials_header from '../../../../assets/images/credentials_header.svg';

import {Tabs, message } from 'antd';
import CopyToClipboardComponent from '../../../../components/CopyToClipboard/CopyToClipboardComponent';


const  {TabPane} = Tabs;
function Credentials({ classes, getSingleProject, match, project,test_credentials, live_credentials }){
    useEffect(() => {
        getSingleProject(match.params.id);
    }, [getSingleProject, match.params.id]);

    const onHandleCopyEvent = () => {
        message.config({
            top: 80,
            duration: 4,
            maxCount: 3,
          });
        message.success('Copied to Clipboard!');
        
    }

    return (
        <div className={classes.credentialsview}>
            <h1 className={classes.header}>Credentials</h1>
            <div className={classes.credentials_card}>
                <div className={classes.paper}>
                    <Banner 
                        title='Welcome to your app'
                        img={credentials_header}
                        bgcolor='blue'
                        text="Whether you are playing in our Sandbox or performing live requests, these credentials give you access to your tokens."
                    />
                </div>
            </div>
            <div className={classes.tabs}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="SandBox" key="1">
                        <div className={classes.tabcontent}>                           
                            <CopyToClipboardComponent 
                                credentials={test_credentials}
                                handleCopyEvent={onHandleCopyEvent}/>
                        </div>                        
                    </TabPane>
                    <TabPane tab="Production" key="2">
                        <div className={classes.tabcontent}>                           
                            <CopyToClipboardComponent 
                                credentials={live_credentials}
                                handleCopyEvent={onHandleCopyEvent}/>
                        </div>
                    </TabPane>
                </Tabs>
            </div>           
        </div>
        
    );
}

const mapStateToProps = (state) => {
    return {
        project: state.project.item.data,
        live_credentials: state.credentials.live_credentials,
        test_credentials: state.credentials.test_credentials
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSingleProject: projectActions.getSingleProject
    }, dispatch);
};

Credentials.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Credentials)));
