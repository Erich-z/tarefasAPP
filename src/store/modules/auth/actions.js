export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (Email, senha) => ({
    type: LOGIN_REQUEST,
    payload: {Email, senha}
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: { token }
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: { error }
})