import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Checkbox } from 'antd';
import * as resourcesActions from '../../store/actions';
import {withStyles} from '@material-ui/core';
import styles from './styles';

export const CustomCheckbox = ({ classes, resource, hasCheckbox, requestFor_resources, addResource, removeResource }) => {
    const handleChecked = (e) => {
        const { value, checked } = e.target;

        if(checked){
            addResource(value)
        }
        else {
            removeResource(value)
        }
    }
    return (
        <Row>
            <Checkbox
                className={classes.custom_checkbox}
                style={{display: hasCheckbox ? 'block' : 'none'}}
                id={resource.id}
                value={resource.id}
                onChange={handleChecked}
                checked={requestFor_resources.data.indexOf(resource.id) !== -1}
            />
            {/*<input type="checkbox" className={classes.custom_checkbox} */}
            {/*        style={{display: hasCheckbox ? 'block' : 'none'}}*/}
            {/*        id={resource.id}  */}
            {/*        value={resource.id} */}
            {/*        onChange={handleChecked}*/}
            {/*        checked={requestFor_resources.data.indexOf(resource.id) !== -1}/>*/}
            <label htmlFor={hasCheckbox ? resource.id : null} className={classes.custom_checkbox_label}>{resource.name}</label>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        requestFor_resources: state.resources.requestFor_resources
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addResource: resourcesActions.addResource,
        removeResource: resourcesActions.removeResource
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(CustomCheckbox));
