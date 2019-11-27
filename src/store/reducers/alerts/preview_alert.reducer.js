import * as Actions from '../../actions';

const initialState = {
    open  : false,
    create: false
};

const previewAlert = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_PREVIEW:
        {
            return {
                open  : true,
                create: action.payload
            };
        }
        case Actions.HIDE_PREVIEW:
        {
            return {
                ...state,
                open: false
            };
        }
        default:
        {
            return state;
        }
    }
};

export default previewAlert;
