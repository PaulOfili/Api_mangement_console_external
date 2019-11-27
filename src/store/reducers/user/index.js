import {combineReducers} from 'redux';
import auth from './user.reducer';


const user = combineReducers({
    auth,
});

export default user;