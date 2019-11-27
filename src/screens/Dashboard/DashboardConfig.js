import React from 'react';
import PrivateRoute from '../../AuthorizedRoute';
import roles from '../../config/roles';
import APIs from './screens/APIs';
import Console from './screens/Console';
import Overview from './screens/Overview';
import Settings from './screens/Settings';
import Credentials from './screens/Credentials';
import Support from './screens/Support';

const DashboardConfig = {
    settings: {
        layout: {
            style: 'dashboard'
        }
    },
    auth    : roles.user,
    name: 'Dashboard',
    routes  : [
        {
            path     : '/overview',
            render: (props) => <PrivateRoute component={Overview} />
        },
        {
            path     : '/apps/:id/settings',
            render: (props) => <PrivateRoute component={Settings} />
        },
        {
            path     : '/apps/:id/credentials',
            render: (props) => <PrivateRoute component={Credentials} />
        },
        {
            path     : '/apps/:id/products',
            render: (props) => <PrivateRoute component={APIs} />
        },
        {
            path     : '/playground/console',
            render: (props) => <PrivateRoute component={Console} />
        },
        {
            path     : '/support',
            render: (props) => <PrivateRoute component={Support}  />
        }
    ]
};

export default DashboardConfig;