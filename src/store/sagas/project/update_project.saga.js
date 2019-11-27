import {put, takeLatest, call} from 'redux-saga/effects';
import projectsService from "../../../services/projectsService";
import {HIDE_CREATE, SHOW_TOAST} from "../../actions/alerts";
// import history from '../../../history';
import {
    UPDATE_PROJECT,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_ERROR
}
    from "../../actions/project";

function* updateProjectSaga(action) {
    try {
        const data = yield call(projectsService.updateProject, action.payload);
        yield put({
            type: UPDATE_PROJECT_SUCCESS,
            payload: data.id
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: `${data.name} updated Successfully!`
            }
        });
        yield put({
            type: HIDE_CREATE
        });
    } catch (error) {
        yield put({
            type: UPDATE_PROJECT_ERROR, payload: error
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


export function* updateProjectSagaWatcher() {
    yield takeLatest(UPDATE_PROJECT, updateProjectSaga);
}