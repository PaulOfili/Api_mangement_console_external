import {put, takeLatest, call} from 'redux-saga/effects';
import resourcesServices from "../../../services/resourcesService";
import {SHOW_TOAST} from "../../actions/alerts";
import {
    POST_REQUEST_RESOURCES,
    POST_REQUEST_RESOURCES_ERROR,
    POST_REQUEST_RESOURCES_SUCCESS,
}
    from "../../actions";
function* postRequestResources(action) {
    try {
        yield call(resourcesServices.postRequestResources, action.payload);
        yield put({
            type: POST_REQUEST_RESOURCES_SUCCESS, payload: action.payload,
        });

        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'success',
                message: `Changes saved Successfully and Request Made!`
            }
        });        
    } catch (error) {
        yield put({
            type: POST_REQUEST_RESOURCES_ERROR
        });
        yield put({
            type: SHOW_TOAST,
            payload: {
                variant: 'error',
                message: error.message
            }
        });
    }
}

export function* postRequestResourcesWatcher() {
    yield takeLatest([POST_REQUEST_RESOURCES], postRequestResources);
}