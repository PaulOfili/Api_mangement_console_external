import {put, takeLatest, call} from 'redux-saga/effects';
import credentialService from "../../../services/credentialService";
import {
    GET_LIVE_CREDENTIALS,
    GET_LIVE_CREDENTIALS_SUCCESS,
    GET_LIVE_CREDENTIALS_ERROR,
    GET_SINGLE_PROJECT_SUCCESS,
    GO_LIVE_SUCCESS
}
    from "../../actions";
function* getLiveCredentialSaga(action) {
    yield put({
        type: GET_LIVE_CREDENTIALS,
    });

    try {
        const data = yield call(credentialService.getLiveCredentials, action.payload.id);
        yield put({
            type: GET_LIVE_CREDENTIALS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_LIVE_CREDENTIALS_ERROR, 
            payload: error.message ? error.message : error
        });
    }
}

export function* getLiveCredentialWatcher() {
    yield takeLatest([GET_SINGLE_PROJECT_SUCCESS, GO_LIVE_SUCCESS], getLiveCredentialSaga);
}