export const GET_LIVE_CREDENTIALS = 'GET_LIVE_CREDENTIALS';
export const GET_LIVE_CREDENTIALS_ERROR = 'GET_LIVE_CREDENTIALS_ERROR';
export const GET_LIVE_CREDENTIALS_SUCCESS = 'GET_LIVE_CREDENTIALS_SUCCESS';

export const getLiveCredentials = (data) => ({
    type: GET_LIVE_CREDENTIALS,
    payload: data
});
