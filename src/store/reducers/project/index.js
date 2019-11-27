import {combineReducers} from 'redux';
import item from './single_project.reducer';
import create_project from './create_project.reducer';
import update_project from './update_project.reducer';

const project = combineReducers({
    item,
    create_project,
    update_project
});

export default project;