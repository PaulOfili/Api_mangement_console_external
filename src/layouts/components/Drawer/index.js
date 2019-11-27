import React from 'react';
import {connect} from 'react-redux';
import { Drawer, Hidden} from '@material-ui/core';
import Sidebar from '../Sidebar';

function CustomDrawer({ handleDrawerToggle, mobileOpen, routes, brand, projects }){

    return (
        <Hidden mdUp implementation="css">
            <Drawer
                variant="temporary"
                anchor={"right"}
                className="py-12"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                <Sidebar 
                    color="dark"
                    routes={routes}
                    brand={brand}
                    projects={projects}
                />
            </Drawer>
        </Hidden>
    );
}


export default connect(null, null)(CustomDrawer);