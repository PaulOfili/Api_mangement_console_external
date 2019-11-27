export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE';

export const addResource = (payload) => {
    return {
        type: ADD_RESOURCE,
        payload
    };
};
export const removeResource = (payload) => {
    return {
        type: REMOVE_RESOURCE,
        payload
    };
};