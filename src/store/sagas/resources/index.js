import { all } from 'redux-saga/effects';
import { getAllAvailableResourcesWatcher } from './get_all_available_resources.saga';
import { getAllRequestedResourcesWatcher } from './get_all_requested_resources.saga';
import { getAllApprovedResourcesWatcher } from './get_all_approved_resources.saga';
import { postRequestResourcesWatcher } from './post_request_resources.saga';

export default function* resourcesSaga() {
    yield all([
        getAllAvailableResourcesWatcher(),
        getAllRequestedResourcesWatcher(),
        getAllApprovedResourcesWatcher(),
        postRequestResourcesWatcher(),
    ]);
}