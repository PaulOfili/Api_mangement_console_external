import {combineReducers} from 'redux';
import toast from './toast.reducer';
import create_alert from './create_alert.reducer';
import preview_alert from './preview_alert.reducer';

const alerts = combineReducers({
    toast,
    create_alert,
    preview_alert
});

export default alerts;