import {combineReducers} from 'redux';
import available_resources from './get_all_available_resources.reducer';
import requested_resources from './get_all_requested_resources.reducer';
import approved_resources from './get_all_approved_resources.reducer';
import requestFor_resources from './request_resources.reducer';

const resources = combineReducers({
    available_resources,
    requested_resources,
    approved_resources,
    requestFor_resources
});

export default resources;