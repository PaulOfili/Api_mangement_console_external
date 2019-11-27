export const GET_ALL_APPROVED_RESOURCES = 'GET_ALL_APPROVED_RESOURCES';
export const GET_ALL_APPROVED_RESOURCES_ERROR = 'GET_ALL_APPROVED_RESOURCES_ERROR';
export const GET_ALL_APPROVED_RESOURCES_SUCCESS = 'GET_ALL_APPROVED_RESOURCES_SUCCESS';


export const getAllApprovedResources = (data) => {
    return {
        type: GET_ALL_APPROVED_RESOURCES,
        payload: data
    }
};