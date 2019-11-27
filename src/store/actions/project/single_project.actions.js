export const GET_SINGLE_PROJECT = 'GET_SINGLE_PROJECT';
export const GET_SINGLE_PROJECT_ERROR = 'GET_SINGLE_PROJECT_ERROR';
export const GET_SINGLE_PROJECT_SUCCESS = 'GET_SINGLE_PROJECT_SUCCESS';

export const getSingleProject = (data) => ({
    type: GET_SINGLE_PROJECT,
    payload: data
});
