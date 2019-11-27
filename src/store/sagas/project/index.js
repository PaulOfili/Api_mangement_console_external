import { all } from 'redux-saga/effects';
import { getSingleProjectWatcher } from './single_project.saga';
import { createProjectSagaWatcher } from './create_project.saga';
import { updateProjectSagaWatcher } from './update_project.saga';
import { goLiveSagaWatcher } from './go_live.saga';


export default function* projectSaga() {
    yield all([
        getSingleProjectWatcher(),
        createProjectSagaWatcher(),
        updateProjectSagaWatcher(),
        goLiveSagaWatcher()
    ]);
}