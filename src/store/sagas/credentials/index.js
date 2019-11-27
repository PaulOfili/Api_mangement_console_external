import { all } from 'redux-saga/effects';
import { getLiveCredentialWatcher } from './get_live.saga';
import { getTestCredentialWatcher } from './get_test.saga';
import { generateTestTokenWatcher } from './generate_test_token.saga';
import { generateLiveTokenWatcher } from './generate_live_token.saga';


export default function* credentialsSaga() {
    yield all([
        getLiveCredentialWatcher(),
        getTestCredentialWatcher(),
        generateTestTokenWatcher(),
        generateLiveTokenWatcher()
    ]);
}