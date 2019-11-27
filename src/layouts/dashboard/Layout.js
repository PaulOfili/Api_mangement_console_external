import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles, Hidden} from '@material-ui/core';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthDialog from "../components/AuthDialog";
import PreviewDialog from "../components/PreviewDialog";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Header/TopBar';
import * as projectsActions from '../../store/actions';
import AppContext from '../../AppContext';
import systemConfig from '../../config/system';
import Toast from "../../components/Alerts/Toast";
import Drawer from '../components/Drawer';

const styles = theme => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    content: {
        position: 'relative',
        display: 'flex',
        overflow: 'auto',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex: 2
    }
});

const dashboardRoutes = [];

function Layout({children, projects, getAllProjects, project}) {
    const [mobileOpen, setDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setDrawer(!mobileOpen);
    };

    useEffect(() => {
        getAllProjects()
    }, [getAllProjects]);

    return (<AppContext.Consumer>
        {({routes}) => {
            return (
                <div id='dashboard'>
                    <Hidden smDown>
                        <Sidebar
                            color="dark"
                            routes={dashboardRoutes}
                            brand={systemConfig.imageBaseUrl}
                            projects={projects}
                            project={project}
                            fixed
                        />
                    </Hidden>
                    <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} routes={dashboardRoutes}
                            brand={systemConfig.imageBaseUrl} projects={projects} project={project}/>
                    <main>
                        <Topbar handleDrawerToggle={handleDrawerToggle} project={project}/>
                        <section id='mainWrapper'>
                            {
                                renderRoutes(routes)
                            }
                        </section>
                    </main>
                    {children}
                    <AuthDialog />
                    <PreviewDialog />
                    <Toast />
                </div>
            )
        }}
    </AppContext.Consumer>)

}


function mapStateToProps({projects, project}) {
    return {
        projects: projects.all.data,
        project: project.item.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllProjects: projectsActions.getAllProjects,
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout)));
