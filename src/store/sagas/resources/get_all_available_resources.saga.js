import {put, takeLatest, call} from 'redux-saga/effects';
import resourcesServices from "../../../services/resourcesService";
import {
    GET_ALL_AVAILABLE_RESOURCES,
    GET_ALL_AVAILABLE_RESOURCES_SUCCESS,
    GET_ALL_AVAILABLE_RESOURCES_ERROR,
    GET_SINGLE_PROJECT_SUCCESS,
    POST_REQUEST_RESOURCES_SUCCESS
}
    from "../../actions";
function* getAllAvailableResourcesSaga(action) {
    yield put({
        type: GET_ALL_AVAILABLE_RESOURCES,
    });

    try {
        const data = yield call(resourcesServices.getAllAvailableResources, action.payload.id);
        yield put({
            type: GET_ALL_AVAILABLE_RESOURCES_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_AVAILABLE_RESOURCES_ERROR, 
            payload: error.message ? error.message : error
        });
    }
}

export function* getAllAvailableResourcesWatcher() {
    yield takeLatest([GET_SINGLE_PROJECT_SUCCESS, POST_REQUEST_RESOURCES_SUCCESS], getAllAvailableResourcesSaga);
}