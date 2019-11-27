import React from 'react';
import {
    Paper,
    Dialog,
    DialogContent,
    withStyles,
} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../../store/actions';
import Close from '@material-ui/icons/Close';
import styles from './styles';
import {Row, Col, Button} from 'antd';
import successCheck from '../../../assets/images/success-check.svg'
import dangerCheck from '../../../assets/images/danger-check.svg'


function PaperComponent(props) {
    return (
        <Paper {...props} style={{width: "auto", maxWidth: "600px", height: "auto"}}/>
    );
}

function PreviewDialog({open, classes, project_id, goLive,  requested_resources, approved_resources, hidePreview}){
    // const [goLiveDisabled, setGoLiveDisabled] = useState(true);
    // console.log(goLiveDisabled)
    // useEffect(() => {
    //     if ((requested_resources && requested_resources.length) || (approved_resources && approved_resources.length)) {
    //         setGoLiveDisabled(false)
    //     }
    // });

    const handleClose = () => {
        hidePreview();
    };

    const onGoLive = () => {
        goLive(project_id);
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                maxWidth="lg"
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent style={{padding: 0, height: '22.1875rem', width: '34.5rem'}}>
                    <div className="flex h-8" style={{background: '#F0F4F7', padding: '1.5625rem', height: '77px', marginBottom: '0 !important'}}>
                        <div className="w-3/4">
                              <span className={classes.titleText}>Go Live Preview</span>
                        </div>
                        <div className="w-1/4 flex justify-end">
                            <Close onClick={handleClose} style={{cursor: 'pointer'}} />
                        </div>
                    </div>
                    <div className="w-full flex flex-grow flex-col" style={{padding: '1.0625rem'}}>
                        <Row className={classes.taskBody}>
                            <Col span={14} className={classes.taskContent}>
                                <h1 className={classes.taskHeader}>Create Project</h1>
                                <p className={classes.taskText}>You have created the project.</p>
                            </Col>
                            <Col span={10} className={classes.taskStatus}>
                                <img src={successCheck} alt='success_icon'/>
                            </Col>
                        </Row>
                        <Row className={classes.taskBody}>
                            <Col span={14} className={classes.taskContent}>
                                <h1 className={classes.taskHeader}>Permission</h1>
                                <p className={classes.taskText}>You must have at least one resource in the pending or approved list.</p>
                            </Col>
                            <Col span={10} className={classes.taskStatus}>
                                <img src={(requested_resources && requested_resources.length) || (approved_resources && approved_resources.length)
                                    ? successCheck
                                    : dangerCheck} alt='success_icon or danger_icon'/>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '0.4375rem'}}>
                            <Col>
                                <div className="w-full flex justify-content-end">
                                    <Button style={{height: '3rem', padding: '0.6875rem 3.0625rem', marginRight: '0.5625rem', background: '#BABDC2', color: 'white'}} onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button style={{height: '3rem', padding: '0.6875rem 3.0625rem'}}
                                            onClick={onGoLive}
                                            type="primary" htmlType="submit" className="create-project-form-button"
                                            disabled={!((requested_resources && requested_resources.length > 0) || (approved_resources && approved_resources.length > 0))}>
                                        Confirm
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hidePreview: Actions.hidePreview,
        goLive: Actions.goLive,
    }, dispatch);
}

function mapStateToProps({project, alerts, resources}) {
    return {
        open: alerts.preview_alert.open,
        project_id: project.item.data.id,
        requested_resources: resources.requested_resources.data,
        approved_resources: resources.approved_resources.data,
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PreviewDialog));
