import {combineReducers} from 'redux';
import alerts from './alerts';
import credentials from './credentials';
import products from './products';
import product from './product';
import projects from './projects';
import project from './project';
import user from './user';
import resources from './resources';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        credentials,
        products,
        product,
        projects,
        project,
        resources,
        user,
        ...asyncReducers
    });

export default createReducer;
