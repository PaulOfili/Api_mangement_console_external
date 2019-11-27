import {put, takeLatest, call} from 'redux-saga/effects';
import projectsService from "../../../services/projectsService";
import {
    GET_ALL_PROJECTS,
    GET_ALL_PROJECTS_SUCCESS,
    GET_ALL_PROJECTS_ERROR, CREATE_PROJECT_SUCCESS, UPDATE_PROJECT_SUCCESS
}
    from "../../actions";

function* getAllProjectsSaga(action) {
    try {
        const data = yield call(projectsService.getAllProjects, action.payload);
        yield put({
            type: GET_ALL_PROJECTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_PROJECTS_ERROR, 
            payload: error.message ? error.message : error
        });
    }
}


export function* getAllProjectsWatcher() {
    yield takeLatest([GET_ALL_PROJECTS, CREATE_PROJECT_SUCCESS, UPDATE_PROJECT_SUCCESS], getAllProjectsSaga);
}