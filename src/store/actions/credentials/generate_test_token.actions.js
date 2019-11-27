export const GENERATE_TEST_TOKEN = 'GENERATE_TEST_TOKEN';
export const GENERATE_TEST_TOKEN_ERROR = 'GENERATE_TEST_TOKEN_ERROR';
export const GENERATE_TEST_TOKEN_SUCCESS = 'GENERATE_TEST_TOKEN_SUCCESS';

export const getTestToken = (data) => ({
    type: GENERATE_TEST_TOKEN,
    payload: data
});
