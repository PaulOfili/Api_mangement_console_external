import {put, takeLatest, call} from 'redux-saga/effects';
import projectsService from "../../../services/projectsService";
import {HIDE_CREATE, SHOW_TOAST} from "../../actions/alerts";
// import history from '../../../history';
import {
    CREATE_PROJECT,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_ERROR
}
    from "../../actions/project";

function* createProjectSaga(action) {
    try {
        const data = yield call(projectsService.createProject, action.payload);
        yield put({
            type: CREATE_PROJECT_SUCCESS,
            payload: data.id
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: 'Project Created Successfully!'
            }
        });
        yield put({
            type: HIDE_CREATE
        });
        // history.push(`/apps/${data.id}/settings`);
    } catch (error) {
        yield put({
            type: CREATE_PROJECT_ERROR, payload: error
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


export function* createProjectSagaWatcher() {
    yield takeLatest(CREATE_PROJECT, createProjectSaga);
}