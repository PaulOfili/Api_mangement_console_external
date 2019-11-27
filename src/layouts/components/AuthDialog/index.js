import React, {Component} from 'react';
import {
    Paper,
    Dialog,
    DialogContent,
    withStyles,
} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CreateProjectForm from './Forms/CreateProjectForm';
import * as Actions from '../../../store/actions/alerts';
import Close from '@material-ui/icons/Close';
import styles from './styles';

function PaperComponent(props) {
    return (
        <Paper {...props} style={{width: "auto", maxWidth: "600px", height: "auto"}}/>
    );
}

class CustomDialog extends Component {

    state = {
        open: false,
        completed: false
    };

    handleClose = () => {
        this.props.hideCreate();
    };


    render() {
        const {classes} = this.props;


        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    PaperComponent={PaperComponent}
                    maxWidth="lg"
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogContent>
                        <div className="flex mb-4 h-8">
                            <div className="w-3/4">
                                  <span className={classes.titleText}>Create Project</span>
                            </div>
                            <div className="w-1/4 flex justify-end">
                                <Close onClick={this.handleClose} style={{cursor: 'pointer'}} />
                            </div>
                        </div>
                        <div className="w-full flex flex-grow flex-col">
                            <CreateProjectForm onHideCreate={this.handleClose}/>
                        </div>
                        <div>
                            <div className="w-full flex justify-center">
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideCreate: Actions.hideCreate
    }, dispatch);
}

function mapStateToProps({alerts}) {
    return {
        open: alerts.create_alert.open
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CustomDialog));
