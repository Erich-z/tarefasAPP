export const CRIAR_USUARIO_REQUEST = 'CRIAR_USUARIO_REQUEST';
export const CRIAR_USUARIO_SUCCESS = 'CRIAR_USUARIO_SUCCESS';
export const CRIAR_USUARIO_FAILURE = 'CRIAR_USUARIO_FAILURE';

export const criarUsuarioRequest = (usuario, navigation) => ({
    type: CRIAR_USUARIO_REQUEST,
    payload: {usuario, navigation}
});

export const criarUsuarioSuccess = (usuario, navigation) => ({
    type: CRIAR_USUARIO_SUCCESS,
    payload: { usuario, navigation }
});

export const criarUsuarioFailure = (error) => ({
    type: CRIAR_USUARIO_FAILURE,
    payload: { error }
})