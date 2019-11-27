import * as Actions from '../../actions';

const initialState = {
    userData: {
        sessionInterval: 0
    },
    loading: false,
    isLoggedIn: false
}

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.LOGIN_USER_SUCCESS:
                return (
                    Object.assign({}, state, {
                        isLoggedIn:true,
                        userData: action.payload,
                        error: null,
                        loading: false,
                    })
                );
        case Actions.ACCOUNT_LOGOUT:
            return (
                Object.assign({}, state, {
                    isLoggedIn: false,
                    token: null,
                    expiresAt: null,
                    error: null,
                    loading: false
             })
            );
        default:
            return state;
    }
}

export default userReducer;