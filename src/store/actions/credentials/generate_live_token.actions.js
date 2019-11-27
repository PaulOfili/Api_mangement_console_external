export const GENERATE_LIVE_TOKEN = 'GENERATE_LIVE_TOKEN';
export const GENERATE_LIVE_TOKEN_ERROR = 'GENERATE_LIVE_TOKEN_ERROR';
export const GENERATE_LIVE_TOKEN_SUCCESS = 'GENERATE_LIVE_TOKEN_SUCCESS';

export const getLiveToken = (data) => ({
    type: GENERATE_LIVE_TOKEN,
    payload: data
});
