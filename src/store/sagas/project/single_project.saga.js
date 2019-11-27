import {put, takeLatest, call} from 'redux-saga/effects';
import projectsService from "../../../services/projectsService";
import {
    GET_SINGLE_PROJECT,
    GET_SINGLE_PROJECT_SUCCESS,
    CREATE_PROJECT_SUCCESS,
    GET_SINGLE_PROJECT_ERROR,
    UPDATE_PROJECT_SUCCESS
}
    from "../../actions/project";
function* singleProjectSaga(action) {
    try {
        const data = yield call(projectsService.getProjectById, action.payload);
        yield put({
            type: GET_SINGLE_PROJECT_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_SINGLE_PROJECT_ERROR, 
            payload: error.message ? error.message : error
        });
    }
}


export function* getSingleProjectWatcher() {
    yield takeLatest([GET_SINGLE_PROJECT, CREATE_PROJECT_SUCCESS, UPDATE_PROJECT_SUCCESS], singleProjectSaga);
}