import * as Actions from '../../actions';

const initialState = {
    open  : false,
    create: false
};

const createProject = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_CREATE:
        {
            return {
                open  : true,
                create: action.payload
            };
        }
        case Actions.HIDE_CREATE:
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

export default createProject;
