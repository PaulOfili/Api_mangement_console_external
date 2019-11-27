export const GO_LIVE = 'GO_LIVE';
export const GO_LIVE_SUCCESS = 'GO_LIVE_SUCCESS';
export const GO_LIVE_ERROR = 'GO_LIVE_ERROR';

export const goLive = (data) => {
    return {
        type: GO_LIVE,
        payload: data
    }
};
