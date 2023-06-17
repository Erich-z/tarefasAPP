import { CRIAR_USUARIO_FAILURE, CRIAR_USUARIO_REQUEST, CRIAR_USUARIO_SUCCESS } from './actions';

const initialState = {
    loading: false,
    token: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CRIAR_USUARIO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CRIAR_USUARIO_SUCCESS:
            action.payload.navigation.navigate('LoginScreen');
            return {
                ...state,
                loading: false,
                token: action.payload.usuario,
                error: null
            };
        case CRIAR_USUARIO_FAILURE:
            return {
                loading: false,
                token: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default authReducer;