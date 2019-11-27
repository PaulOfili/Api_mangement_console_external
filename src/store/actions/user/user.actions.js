import { removeSession, saveSession, timeOutUser, getSession } from '../../../session/cookies';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';

export const accountLogin = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    };
};

export const logout = () => {
    removeSession();
    return {
        type: ACCOUNT_LOGOUT
    }
};

export const saveUser = (params, token) => {
    saveSession(params, token);
    let expiry = getSession('exp') * 1000;
    let timeOut = expiry - Date.now();
    timeOutUser(timeOut, logOut);
};


export const validateUserData = (data, token) => {
    saveUser(data, token);
};


export const logOut = () => {
    return dispatch => {
        dispatch(logout());
        window.location.href = '/'
    }
}