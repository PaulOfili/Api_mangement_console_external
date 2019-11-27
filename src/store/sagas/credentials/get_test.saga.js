import {put, takeLatest, call} from 'redux-saga/effects';
import credentialService from "../../../services/credentialService";
import {
    GET_TEST_CREDENTIALS,
    GET_TEST_CREDENTIALS_SUCCESS,
    GET_TEST_CREDENTIALS_ERROR,
    GET_SINGLE_PROJECT_SUCCESS
}
    from "../../actions";
function* getTestCredentialSaga(action) {
    yield put({
        type: GET_TEST_CREDENTIALS,
    });

    try {
        const data = yield call(credentialService.getTestCredentials, action.payload.id);
        yield put({
            type: GET_TEST_CREDENTIALS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_TEST_CREDENTIALS_ERROR, 
            payload: error.message ? error.message : error
        });
    }
}

export function* getTestCredentialWatcher() {
    yield takeLatest([GET_SINGLE_PROJECT_SUCCESS], getTestCredentialSaga);
}