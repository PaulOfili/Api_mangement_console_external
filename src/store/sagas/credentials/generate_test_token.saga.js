import {put, takeLatest, call} from 'redux-saga/effects';
import tokenService from "../../../services/tokenService";
import {HIDE_CREATE, SHOW_TOAST} from "../../actions/alerts";
import {
    GENERATE_TEST_TOKEN,
    GENERATE_TEST_TOKEN_ERROR,
    GENERATE_TEST_TOKEN_SUCCESS
}
    from "../../actions";
function* generateTestTokenSaga(action) {
    try {
        const data = yield call(tokenService.generateTestToken, action.payload);
        yield put({
            type: GENERATE_TEST_TOKEN_SUCCESS,
            payload: data
        });
        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Access Token Generated Successfully!'
            }
        });
        yield put({
            type: HIDE_CREATE
        });
    } catch (error) {
        yield put({
            type: GENERATE_TEST_TOKEN_ERROR, payload: error
        });
        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'error',
                message: error.message ? error.message : error
            }
        });
    }
}


export function* generateTestTokenWatcher() {
    yield takeLatest([GENERATE_TEST_TOKEN], generateTestTokenSaga);
}