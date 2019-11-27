import * as Actions from '../../actions';

const initialState = {
    data: []
};

const requestResourcesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.ADD_RESOURCE:
        {
            const new_data = state.data.concat(action.payload)
            return {
                ...state,
               data: new_data
            };
        }
        case Actions.REMOVE_RESOURCE:
        {
            const new_data = state.data.filter(id => id !== action.payload)
            return {
                ...state,
                data: new_data,
            };
        }
        case Actions.POST_REQUEST_RESOURCES_SUCCESS:
        {
            return {
                ...state,
                data: []
            }
        }
        case Actions.POST_REQUEST_RESOURCES_ERROR:
        {
            return state
        }
        default:
        {
            return state;
        }
    }
};

export default requestResourcesReducer;