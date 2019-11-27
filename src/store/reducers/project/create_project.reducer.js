import * as Actions from '../../actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const createProjectReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.CREATE_PROJECT: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.CREATE_PROJECT_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.CREATE_PROJECT_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default createProjectReducer;