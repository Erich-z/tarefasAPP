import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                isAuthenticated: false,
                token: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default authReducer;