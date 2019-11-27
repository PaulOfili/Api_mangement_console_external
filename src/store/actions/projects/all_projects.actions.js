export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_ALL_PROJECTS_ERROR = 'GET_ALL_PROJECTS_ERROR';
export const GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS';


export const getAllProjects = (data) => ({
    type: GET_ALL_PROJECTS,
    payload: data
});
