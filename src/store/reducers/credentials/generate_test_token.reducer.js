import * as Actions from '../../actions';

const initialState = {
    data: null,
    isLoading: false,
    error: false
};

const generateTestTokenReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GENERATE_TEST_TOKEN:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GENERATE_TEST_TOKEN_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GENERATE_TEST_TOKEN_ERROR:
        {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default generateTestTokenReducer;