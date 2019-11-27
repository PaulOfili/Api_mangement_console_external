import * as Actions from '../../actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const updateProjectReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.UPDATE_PROJECT: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.UPDATE_PROJECT_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.UPDATE_PROJECT_ERROR: {
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

export default updateProjectReducer;