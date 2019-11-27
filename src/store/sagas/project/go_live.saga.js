import {put, takeLatest, call} from 'redux-saga/effects';
import projectsService from "../../../services/projectsService";
import {
    GO_LIVE,
    GO_LIVE_SUCCESS,
    GO_LIVE_ERROR,
} from "../../actions/project";
import {HIDE_PREVIEW, SHOW_TOAST} from "../../actions/alerts";

function* goLiveSaga(action) {
    try {
        yield call(projectsService.goLiveProject, action.payload);
        yield put({
            type: GO_LIVE_SUCCESS,
            payload: { id: action.payload }
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success_full_width',
                message: `Congratulations, your live credentials are ready. Your project is in review for approval`
            }
        });
        yield put({
            type: HIDE_PREVIEW
        });
    } catch (error) {
        yield put({
            type: GO_LIVE_ERROR, payload: error
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


export function* goLiveSagaWatcher() {
    yield takeLatest(GO_LIVE, goLiveSaga);
}