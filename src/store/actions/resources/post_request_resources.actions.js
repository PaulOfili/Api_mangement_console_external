export const POST_REQUEST_RESOURCES = 'POST_REQUEST_RESOURCES';
export const POST_REQUEST_RESOURCES_ERROR = 'POST_REQUEST_RESOURCES_ERROR';
export const POST_REQUEST_RESOURCES_SUCCESS = 'POST_REQUEST_RESOURCES_SUCCESS';

export const postRequestResources = (project, data) => ({
    type: POST_REQUEST_RESOURCES,
    payload: {data: data, id: project.id}
});