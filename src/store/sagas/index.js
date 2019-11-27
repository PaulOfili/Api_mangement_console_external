import {all} from 'redux-saga/effects';
import credentialsSaga from './credentials';
import productsSaga from './products';
import productSaga from './product';
import projectsSaga from './projects';
import projectSaga from './project';
import userSaga from './user';
import resourcesSaga from './resources';

export default function* rootSaga() {
    yield all([
        credentialsSaga(),
        productsSaga(),
        productSaga(),
        projectsSaga(),
        projectSaga(),
        userSaga(),
        resourcesSaga(),
    ]);
}
