import React, {useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, withRouter } from 'react-router-dom';
import * as projectActions from '../../store/actions';
import * as alertActions from '../../store/actions';

export function CustomSelect({ classes, toggleOpenList, openList, projects, getSingleProject, project, showCreate, isLoading }){

    useEffect(() => {
        if(makeCall()){
            if(projects && projects[0] && projects[0].id && !project.id){
                getSingleProject(projects[0].id)
            }
        }
    }, [getSingleProject, projects, project.id]);

    const makeCall = () => {
        return window.location.pathname.indexOf('/credentials') === -1
    }
    return (
        <div className={classes.appslist}>
            <div id='selectProjectToggle' className={classes.appswrapper} onClick={toggleOpenList}>
                <div className={classes.appslistcontent}>
                    {
                        isLoading ? <CircularProgress size={20} color="inherit"/>
                        :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 15V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V15H6.27924L6.82339 16.6325C7.09562 17.4491 7.8599 18 8.72076 18H15.382C16.1395 18 16.832 17.572 17.1708 16.8944L18.118 15H22Z" fill="black"/>
                            <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M2.5625 13L5.92654 7.01948C6.28078 6.38972 6.94715 6 7.66969 6H16.3303C17.0529 6 17.7192 6.38972 18.0735 7.01948L21.4375 13H18.118C17.3605 13 16.668 13.428 16.3292 14.1056L15.382 16H8.72076L8.17661 14.3675C7.90438 13.5509 7.1401 13 6.27924 13H2.5625Z" fill="black"/>
                        </svg>
                    }
                    <div className={classes.appslistselect}>{project && project.id 
                        ? project.name.length >  14
                            ? project.name.slice(0, 14) + '...'
                            : project.name
                        : 'Select...'}</div>
                    <input id="react-select-2-input" readOnly="" tabIndex="0" className={classes.appslistinput} value="" onChange={() => {}}/>
                </div>
                <div className={classes.appslistdirection}>
                {
                    openList ?
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.05667 5.52661L4 2.46995L0.943334 5.52661L0 4.58328L4 0.58328L8 4.58328L7.05667 5.52661Z" fill="black"/>
                    </svg>
                    :
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.943333 0.473389L4 3.53005L7.05667 0.473389L8 1.41672L4 5.41672L0 1.41672L0.943333 0.473389Z" fill="black"/>
                    </svg>
                }
                </div>
                <div id='projectList' className={openList ? classes.projectsMenuOpen : classes.projectsMenuClosed}>
                    {
                        projects !== null && projects.length > 0 ?

                        projects.map(projectItem => (
                            <Link className={classes.project} key={projectItem.id}  tabIndex="-1" to={`/apps/${projectItem.id}/credentials`}>{projectItem.name}</Link>
                        ))
                        :
                        <div className={`${classes.textempty} text-center`}  tabIndex="-1">No options</div>
                    }
                    <div className={`${classes.project} ${classes.createtab}`}  tabIndex="-1" onClick={showCreate}>
                        Create project
                    </div>
                </div>   
            </div>
        </div>
    );

}

const mapStateToProps = ({ project, projects }) => {
    return {
        project: project.item.data,
        isLoading: projects.all.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSingleProject: projectActions.getSingleProject,
        showCreate: alertActions.showCreate
    }, dispatch);
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomSelect));