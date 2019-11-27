export const GET_TEST_CREDENTIALS = 'GET_TEST_CREDENTIALS';
export const GET_TEST_CREDENTIALS_ERROR = 'GET_TEST_CREDENTIALS_ERROR';
export const GET_TEST_CREDENTIALS_SUCCESS = 'GET_TEST_CREDENTIALS_SUCCESS';

export const getTestCredentials = (data) => {
    return {
        type: GET_TEST_CREDENTIALS,
        payload: data
    }
};
