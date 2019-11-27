import * as Actions from '../../actions';

const initialState = {
    data: null,
    isLoading: false,
    error: false
};

const generateLiveTokenReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GENERATE_LIVE_TOKEN:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GENERATE_LIVE_TOKEN_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GENERATE_LIVE_TOKEN_ERROR:
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

export default generateLiveTokenReducer;