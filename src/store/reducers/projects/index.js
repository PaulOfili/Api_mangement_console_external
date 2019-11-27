import {combineReducers} from 'redux';
import all from './all_projects.reducer';


const projects = combineReducers({
    all,
});

export default projects;