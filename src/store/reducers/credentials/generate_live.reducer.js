import * as Actions from '../../actions';

const initialState = {
    data: null,
    isLoading: false,
    error: false
};

const generateLiveReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_LIVE_CREDENTIALS:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_LIVE_CREDENTIALS_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_LIVE_CREDENTIALS_ERROR:
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

export default generateLiveReducer;