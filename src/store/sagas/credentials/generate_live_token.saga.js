import {put, takeLatest, call} from 'redux-saga/effects';
import tokenService from "../../../services/tokenService";
import {
    GENERATE_LIVE_TOKEN,
    GENERATE_LIVE_TOKEN_ERROR,
    GENERATE_LIVE_TOKEN_SUCCESS
}
    from "../../actions";
function* generateLiveTokenSaga(action) {
    try {
        const data = yield call(tokenService.generateLiveToken, action.payload);
        yield put({
            type: GENERATE_LIVE_TOKEN_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GENERATE_LIVE_TOKEN_ERROR, 
            payload: error.message ? error.message : error
        });
    }
}


export function* generateLiveTokenWatcher() {
    yield takeLatest([GENERATE_LIVE_TOKEN], generateLiveTokenSaga);
}