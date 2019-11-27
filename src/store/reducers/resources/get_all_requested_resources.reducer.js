import * as Actions from '../../actions';

const initialState = {
    data: null,
    isLoading: false,
    error: false
};

const getAllRequestedResourcesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ALL_REQUESTED_RESOURCES:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_ALL_REQUESTED_RESOURCES_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_ALL_REQUESTED_RESOURCES_ERROR:
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

export default getAllRequestedResourcesReducer;