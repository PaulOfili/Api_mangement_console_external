import { all } from 'redux-saga/effects';
import { getAllProjectsWatcher } from './get_all_projects.saga';

export default function* projectsSaga() {
    yield all([
        getAllProjectsWatcher()
    ]);
}