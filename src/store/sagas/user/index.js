import { all } from 'redux-saga/effects';
import { loginUserWatcher } from './user.saga';


export default function* userSaga() {
    yield all([
        loginUserWatcher()
    ]);
}