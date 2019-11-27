import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Checkbox, Col, Form, Icon, Input, Popover, Row, Select } from 'antd';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import * as projectActions from '../../../../store/actions';

import CircularProgress from '@material-ui/core/CircularProgress';

const { TextArea } = Input;
const { Option } = Select;

const GrantTypes = (
    <div>
        <div>
            <h3>Authorization Code</h3>
            <p>The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.

            After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token.</p>
            <a href="https://oauth.net/2/grant-types/authorization-code/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div>
            <h3>Client Credentials</h3>
            <p>The Client Credentials grant type is used by clients to obtain an access token outside of the context of a user.

            This is typically used by clients to access resources about themselves rather than to access a user's resources.</p>
            <a href="https://oauth.net/2/grant-types/client-credentials/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div>
            <h3>Refresh Token</h3>
            <p>The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired.

            This allows clients to continue to have a valid access token without further interaction with the user.</p>
            <a href="https://oauth.net/2/grant-types/refresh-token/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
        <div>
            <h3>Implicit</h3>
            <p>The Implicit grant type is a simplified flow that can be used by public clients, where the access token is returned immediately without an extra authorization code exchange step.

            It is generally not recommended to use the implicit flow (and some servers prohibit this flow entirely). In the time since the spec was originally written, the industry best practice has changed to recommend that</p>
            <a href="https://oauth.net/2/grant-types/implicit/" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    </div>
)
function Settings({ classes, project, form, getSingleProject, match, updateProject, isLoading, updating }){
    const [projectCredentials, setCredentials] = useState(project);
  
    useEffect(() => {
        if(match.params.id)
            getSingleProject(match.params.id)
    }, [getSingleProject, match.params.id]);

    const handleSubmit = async event => {
      event.preventDefault ();
      form.validateFields((err, values) => {
        if (!err) {
            values.id = project.id;
            updateProject(values);
        }
      });
    };

    const handleChecked = (checkedValues) => {
        setCredentials({ ...projectCredentials, authorizedGrantTypes: checkedValues });
    }

    const handleSelect = (value) => {
        setCredentials({ ...projectCredentials, type: value });
    }
    
    const handleChange = event => {
      const { value, name } = event.target;
  
      setCredentials({ ...projectCredentials, [name]: value });
    };
    
    const { getFieldDecorator } = form;

    return (
        <div id='settings' className={classes.settings}>
            <h1 className={classes.header}>Settings</h1>
            <div className={classes.projectinfo}>
                {
                    isLoading ? 
                    <CircularProgress size={40} color='inherit'/>
                    :
                    (
                    project && project.id ?
                    <div className='form-wrapper'>
                        <Form onSubmit={handleSubmit} className="create-project-form" hideRequiredMark={true} colon={false}>
                            <Form.Item label="Project Name" className="create-project-form-label">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Project name is required and must be between 5 and 50 characters long' }],
                                initialValue: project.name
                            })(
                                <Input
                                    className={`${classes.greyBackground} create_project_form_input`}
                                    name="name"
                                    type='text'
                                    onChange={handleChange}
                                    minLength={5}
                                    placeholder="Project Name"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item label="Project Type">
                            {getFieldDecorator('type', {
                                rules: [{ required: true, message: 'Please select the project type!.' }],
                                initialValue: project.type
                            })(
                                <Select
                                    showSearch
                                    name='projectType'
                                    placeholder="Project Type"
                                    optionFilterProp="children"
                                    onChange={handleSelect}
                                    filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="web">Web</Option>
                                    <Option value="mobile">Mobile</Option>
                                </Select>,
                            )}
                            </Form.Item>
                            <Form.Item label="Project Description">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Please input a suitable description!.' }],
                                initialValue: project.description
                            })(
                                <TextArea
                                    className={`${classes.greyBackground} create_project_form_text_area`}
                                    name="description"
                                    onChange={handleChange}
                                    maxLength="500"
                                    rows="3"
                                    placeholder="Please state what your project is about (Max 500 chars)"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item label={
                                <span>
                                    Authorization Grant Types&nbsp;
                                    <Popover content={GrantTypes} title="OAuth 2.0 Grant Types" trigger="click">
                                        <Icon type="question-circle-o" />
                                    </Popover>
                                </span>
                            }>
                            {getFieldDecorator('authorizedGrantTypes', {
                                rules: [{ required: true, message: 'Please select  applicable Grant Types, click on the question icon for more information!.' }],
                                initialValue: project.authorizedGrantTypes
                            })(
                                <Checkbox.Group style={{ width: '100%' }} onChange={handleChecked}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="authorization_code">Authorization Code</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="client_credentials" disabled={true}>Client Credentials</Checkbox>
                                        </Col>
                                        <Col span={6}>
                                            <Checkbox value="refresh_token">Refresh Token</Checkbox>
                                        </Col>
                                        <Col span={6}>
                                            <Checkbox value="implicit">Implicit</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            )}
                            </Form.Item>
                            <Form.Item label="Logo URL">
                            {getFieldDecorator('logoUrl', {
                                rules: [{ required: false, message: 'Please input URL to the logo of your app!.' }],
                                initialValue: project.logoUrl
                            })(
                                <Input
                                    className={`${classes.greyBackground} create_project_form_input`}
                                    name="logoUrl"
                                    type='text'
                                    onChange={handleChange}
                                    placeholder="http://mycdn.com/logo?30X30"
                                />,
                            )}
                            </Form.Item>
                                <Button style={{height: '2.9375rem', padding: ' 0.75rem 1.5rem'}}
                                        type="primary" htmlType="submit" className="create-project-form-button" disabled={false} loading={updating}>
                                    Update
                                </Button> 
                        </Form>
                    </div>
                    :
                    <h1>Getting Data</h1>
                )
            }
            </div>
        </div>
    );
}

const mapStateToProps = ({project}) => {
    return {
        project: project.item.data,
        isLoading: project.item.isLoading,
        updating: project.update_project.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSingleProject: projectActions.getSingleProject,
        updateProject: projectActions.updateProject
    }, dispatch);
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

const WrappedSettingsForm = Form.create({ name: 'settings-form' })(Settings);

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedSettingsForm)));