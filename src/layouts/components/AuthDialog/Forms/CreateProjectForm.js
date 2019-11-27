import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Checkbox, Col, Form, Icon, Input, Popover, Row, Select } from 'antd';
// import shortid from 'shortid';
import 'antd/dist/antd.css';
import './styles.css';
import * as projectsActions from '../../../../store/actions';
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

const CreateProject = ({ form, createProject, isLoading, onHideCreate }) => {
    const [projectCredentials, setCredentials] = useState({});
  
  
    const handleSubmit = async event => {
      event.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
            createProject(values);
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
        <div className='form-wrapper'>
            <Form onSubmit={handleSubmit} hideRequiredMark={true} colon={false}>
                <Form.Item label="Project Name" className="create-project-form-label">
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Project name is required and must be between 5 and 50 characters long' }]
                })(
                    <Input
                        className="create_project_form_input"
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
                    rules: [{ required: true, message: 'Please select the project type!' }]
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
                    </Select>
                )}
                </Form.Item>
                <Form.Item label="Project Description">
                {getFieldDecorator('description', {
                    rules: [{ required: true, message: 'Please input a suitable description!' }]
                })(
                    <TextArea
                        className="create_project_form_text_area"
                        name="description"
                        onChange={handleChange}
                        maxLength="500"
                        rows="3"
                        placeholder="Please state what your project is about (Max 1000 chars)"
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
                    initialValue: ['client_credentials']
                })(
                    <Checkbox.Group style={{ width: '100%' }} onChange={handleChecked}>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="authorization_code">Authorization Code</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="client_credentials" checked disabled>Client Credentials</Checkbox>
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
                    rules: [{ required: false, message: 'Please input URL to the logo of your app!' }]
                })(
                    <Input
                        className="create_project_form_input"
                        name="logoUrl"
                        type='text'
                        onChange={handleChange}
                        placeholder="http://mycdn.com/logo?30X30"
                    />,
                )}
                </Form.Item>
                    <div style={{float: 'right', padding: '0.375rem 0 1.2rem 0' }}>
                        <Button style={{marginRight: '0.5625rem', border: 'none'}} onClick={onHideCreate}>
                            Cancel
                        </Button>                        
                        <Button style={{height: '3.035rem', padding: ' 0.75rem 3.375rem'}}
                            type="primary" htmlType="submit" className="create-project-form-button" disabled={false} loading={isLoading}>
                            Create
                        </Button> 
                    </div>
                    
            </Form>
        </div>
    );
  };

const WrappedCreateProjectForm = Form.create({ name: 'create-project-form' })(CreateProject);

const mapStateToProps = ({project}) => {
    return {
        isLoading: project.create_project.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createProject: projectsActions.createProject,
     }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedCreateProjectForm));