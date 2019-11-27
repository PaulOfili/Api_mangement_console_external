import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { Button, Form, Input, Select } from 'antd';
import styles from './styles';
import Directory from '../Directory/directory.component';
import Configs from '../Configs/configs.component';
import * as alertActions from '../../store/actions';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="GET" style={{ width: 80 }}>
      <Option value="GET">GET</Option>
      <Option value="POST">POST</Option>
      <Option value="PUT">PUT</Option>
      <Option value="DELETE">DELETE</Option>
    </Select>
  );

function Console({ classes, project, showCreate, loadProject, loadProjects, isLoading, credentials, generateToken, token }){
    const [text, encodeText] = useState('')

    useEffect(() => {
        if(credentials && credentials.clientId){
            let string = `${credentials.clientId}:${credentials.clientSecret}`;
                string = encode(string);
            encodeText(string)
       }

    }, [credentials, text])

    const encode = (str) => {
        return window.btoa(unescape(encodeURIComponent(str)));
    }



    return(
        <section className={classes.consoleview}>
            <Form layout="vertical">
                <Form.Item >
                    <Input
                        id='testInput'
                        className= {classes.testinput}
                        addonBefore={selectBefore}
                        addonAfter={
                            <Button type="primary" htmlType="submit" id='testButton' className={classes.testbutton}>
                                Send
                            </Button>
                        }
                        defaultValue="https://myportal.com"
                    />
                </Form.Item>
            </Form>
            <div className={classes.consoleviewwrapper}>
                { !token && <div className={classes.overlay}></div> }
                
                {
                    !project.id ? <Button className={classes.overlaybutton} type='primary' onClick={showCreate} loading={loadProject || loadProjects}>{!loadProject && !loadProjects && 'Create project to access console'}</Button>
                    :
                    (
                    project.id && !token ?
                    <Button className={classes.overlaybutton} type='primary' onClick={() => generateToken(text) } loading={isLoading} disabled={text === ''}>{ isLoading ? "Generating Access Token" : "Generate Access Token"}</Button>
                    :
                    null
                    )
                }
                <div className={`${classes.consolecontent} ${!token && classes.filter}`}>
                    <Directory />
                    <Configs />
                </div>
            </div>
        </section>
    )
}

Console.propTypes = {
    classes: PropTypes.object.isRequired
} 

const mapStateToProps = ({ project, projects, credentials }) => {
    return {
        loadProject: project.item.isLoading,
        loadProjects: projects.all.isLoading,
        isLoading: credentials.test_token.isLoading,
        token: credentials.test_token.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        showCreate: alertActions.showCreate
    }, dispatch);
}

export default withStyles(styles, { withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(Console));