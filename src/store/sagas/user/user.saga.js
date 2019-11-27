import * as jwt_decode from 'jwt-decode';
import {put, call, takeLatest} from 'redux-saga/effects';
import { validateUserData, LOGIN_USER, LOGIN_USER_SUCCESS } from '../../actions';


function* loginUserSaga (data) {

    let decoded = jwt_decode(data.payload);
    if(decoded.email){
        yield call(validateUserData, decoded, data.payload);
        yield put({
            type: LOGIN_USER_SUCCESS,
            payload: decoded
        });
    }
    else{
        window.location.href = '/'
    }
}

export function* loginUserWatcher() {
    yield takeLatest(LOGIN_USER, loginUserSaga);
}