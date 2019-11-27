export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_ERROR = 'UPDATE_PROJECT_ERROR';

export const updateProject = (data) => ({
    type: UPDATE_PROJECT,
    payload: data
});
