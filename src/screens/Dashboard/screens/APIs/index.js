import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import * as resourcesActions from '../../../../store/actions';
import * as projectActions from '../../../../store/actions';
import ResourcePermission from '../../../../components/ResourcePermission/ResourcePermission';
import {withStyles} from '@material-ui/core';
import styles from './styles';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';

const { TabPane } = Tabs;

function Permissions({classes, resources, project, getSingleProject, postRequestResources, product, isLoading}){
    // { products, isLoading,  getAllProducts }
    useEffect(() => {
        getSingleProject(project.id);
    }, [getSingleProject, project.id]);
    
    return (            
        <div className={classes.permissionview}>
            <h1 className={classes.header}>Permissions</h1>
            <div className={classes.content}>
                <div className={classes.contentHeading}>
                    <strong>Take Your Project Live</strong>
                    <p>Select APIs for access in production as relevant to your project.</p>
                </div>
                <Tabs defaultActiveKey="1" animated={true}>
                    <TabPane tab="Available" key="1">               
                        {
                            <ResourcePermission

                                resources={resources.available_resources}
                                hasCheckbox={true}
                                textToShowIfEmpty={{title:'No Available Resources', message: 'Request for resources to use in your project'}}/>
                        }
                    </TabPane>
                    <TabPane tab="Pending" key="2">
                        {
                            <ResourcePermission 
                                resources={resources.requested_resources}
                                hasCheckbox={false}
                                textToShowIfEmpty={{title:'No Pending Resources', message: 'You have not requested for any resource.'}} />
                        }
                    </TabPane>
                    <TabPane tab="Approved" key="3">
                        {
                            <ResourcePermission 
                                resources={resources.approved_resources} 
                                hasCheckbox={false}
                                textToShowIfEmpty={{title:'No Approved Resources', message: 'None of your requests have been approved'}}/>
                        }
                    </TabPane>
                </Tabs>
            </div>
            <div className={classes.sendRequestFooter}>
                <Button className={classes.sendRequestFooterButton}
                    disabled={!(resources.requestFor_resources.data.length > 0)}
                    size='large' 
                    type="primary"
                    onClick={() => postRequestResources(project, {resources: resources.requestFor_resources.data})}>Save changes</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        project: state.project.item.data,
        products: state.products,
        isLoading: state.products.all.isLoading,
        resources: state.resources

    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSingleProject: projectActions.getSingleProject,
        postRequestResources: resourcesActions.postRequestResources
    }, dispatch);
};

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Permissions)));