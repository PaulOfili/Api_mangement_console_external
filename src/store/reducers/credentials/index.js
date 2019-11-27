import {combineReducers} from 'redux';
import test_credentials from './generate_test.reducer';
import live_credentials from './generate_live.reducer';
import test_token from './generate_test_token.reducer';
import live_token from './generate_live_token.reducer';

const credentials = combineReducers({
    test_credentials,
    live_credentials,
    test_token,
    live_token
});

export default credentials;