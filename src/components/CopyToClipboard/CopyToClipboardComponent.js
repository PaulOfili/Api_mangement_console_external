import React, {useState} from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core';
import styles from './styles';
import {Form, Input, Icon, Empty } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import copySvg from '../../assets/images/copy_text.svg'
import CircularProgress from '@material-ui/core/CircularProgress';

export function CopyToClipboardComponent({ classes, credentials, handleCopyEvent }){
    const [clientSecretHidden, setClientSecretHidden] = useState(true);

    const toggleClientSecretShow = () => {
        setClientSecretHidden(!clientSecretHidden)
    }

    if(credentials.isLoading){
        return <CircularProgress size={40} color='inherit'/>
    }
    if (credentials.data && credentials.data.clientId && credentials.data.clientSecret) {
        return (
            <Form>
                <Form.Item>
                    <h1 className={classes.tabcontent_header}>Client ID</h1>
                    <p>Copy and paste this into the authentication URL to retrieve the authentication</p>
                    <Input className={classes.tabcontent_input}
                        disabled
                        placeholder="Client ID"
                        name='clientId'
                        value={credentials.data.clientId}
                        suffix={
                            <div>
                                <CopyToClipboard 
                                    onCopy={handleCopyEvent}
                                    text={credentials.data.clientId}>
                                    <span style={{cursor: 'pointer'}}><img src={copySvg} alt='copy_icon'/></span>
                                    {/* <Icon style={{cursor: 'pointer', color: '#08c' }} type='copy' /> */}
                                </CopyToClipboard>
                                
                            </div>                            
                        }                        
                    />,
                </Form.Item>
                <br />
                <Form.Item>
                    <h1 className={classes.tabcontent_header}>Secret</h1>
                    <p>Copy and paste this into the authentication URL to retrieve the authentication</p>
                    <Input className={classes.tabcontent_input}
                        disabled
                        type={clientSecretHidden ? "password" : "text"}
                        placeholder="Secret"
                        name='clientSecret'
                        value={credentials.data.clientSecret}
                        suffix={
                            <div>
                                <Icon 
                                    style={{cursor: 'pointer', color: '#08c', fontSize: '1.2rem' }}
                                    onClick={toggleClientSecretShow}
                                    type={clientSecretHidden ? "eye" : "eye-invisible"} 
                                />
                                &nbsp;
                                &nbsp;
                                <CopyToClipboard 
                                    onCopy={handleCopyEvent}
                                    text={credentials.data.clientSecret}>
                                    <span style={{cursor: 'pointer'}}><img style={{display: 'inline'}} src={copySvg} alt='copy_icon'/></span>
                                </CopyToClipboard>  
                            </div>
                                                  
                        }
                    />,
                </Form.Item>     
            </Form>
        );
    }
    if (credentials.data && !credentials.data.clientId && !credentials.data.clientSecret){
        return (
        <Empty
            style={{marginTop: '3rem'}}
            description={
                <span>
                    You need to go live before you can have your life credentials
                </span>
            }
        >
        </Empty>)
    }

    return null;
}

CopyToClipboardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(CopyToClipboardComponent);