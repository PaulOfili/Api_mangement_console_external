import Home from './index';
import roles from '../../config/roles';

const HomeConfig = {
    settings: {
        layout: {
            style: 'main'
        }
    },
    auth    : roles.guest,
    name: 'Home',
    exact    : true,
    routes  : [
        {
            path     : '/',
            component: Home
        }
    ]
};

export default HomeConfig;