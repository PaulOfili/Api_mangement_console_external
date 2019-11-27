import * as reduxModule from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { throttle } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createReducer from './reducers';
import {clearProjectState, loadState, saveState} from '../session/sessionStorage';
import { getSession } from '../session/cookies';

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

let secondsRemaining = 0;


if (getSession().expiryDate) {
	let expiry = new Date(getSession().expiryDate);
	let currentDate = new Date();
	let timeRemaining = expiry - currentDate;
    secondsRemaining =  Math.floor(timeRemaining / 1e3);
}

try {
    const urlParams = new URLSearchParams(window.location.search);
    const myMessage = urlParams.get('message');
    if(myMessage && myMessage === 'Logout successful'){
        clearProjectState();
    }

} catch (err) {
    if (process.env.NODE_ENV !== 'production') {
        /* eslint-disable no-console */
        console.error(err)
        /* eslint-enable no-console */
    }
}

const persistedState = loadState();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // trace: true, traceLimit: 25
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(createReducer(), persistedState, enhancer);

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    if ( store.asyncReducers[key] )
    {
        return;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
};

sagaMiddleware.run(rootSaga);

store.subscribe(
    throttle(() => {
        saveState({
            user: {
                auth: {
                    isLoggedIn: store.getState().user.auth.isLoggedIn,
                    userData: {
                        email: store.getState().user.auth.userData.email,
                        user_name: store.getState().user.auth.userData.user_name,
                        firstName: store.getState().user.auth.userData.firstName,
                        lastName: store.getState().user.auth.userData.lastName,
                        sessionInterval: secondsRemaining,
                    }
                }
            },
            project: {
                item: {
                    data: store.getState().project.item.data
                }
            }
        });
    }, 1000)
  );

export default store;
