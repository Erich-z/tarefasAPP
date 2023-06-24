export const LISTAR_TAREFA_REQUEST = 'LISTAR_TAREFA_REQUEST';
export const LISTAR_TAREFA_SUCCESS = 'LISTAR_TAREFA_SUCCESS';
export const LISTAR_TAREFA_FAILURE = 'LISTAR_TAREFA_FAILURE';

export const SHOW_TAREFA_REQUEST = 'SHOW_TAREFA_REQUEST';
export const SHOW_TAREFA_SUCCESS = 'SHOW_TAREFA_SUCCESS';
export const SHOW_TAREFA_FAILURE = 'SHOW_TAREFA_FAILURE';

export const CRIAR_TAREFA_REQUEST = 'CRIAR_TAREFA_REQUEST';
export const CRIAR_TAREFA_SUCCESS = 'CRIAR_TAREFA_SUCCESS';
export const CRIAR_TAREFA_FAILURE = 'CRIAR_TAREFA_FAILURE';

export const UPDATE_TAREFA_REQUEST = 'UPDATE_TAREFA_REQUEST';
export const UPDATE_TAREFA_SUCCESS = 'UPDATE_TAREFA_SUCCESS';
export const UPDATE_TAREFA_FAILURE = 'UPDATE_TAREFA_FAILURE';

export const DELETE_TAREFA_REQUEST = 'DELETE_TAREFA_REQUEST';
export const DELETE_TAREFA_SUCCESS = 'DELETE_TAREFA_SUCCESS';
export const DELETE_TAREFA_FAILURE = 'DELETE_TAREFA_FAILURE';

export const criarTarefaRequest = (tarefa) => ({
    type: CRIAR_TAREFA_REQUEST,
    payload: {tarefa}
});

export const criarTarefaSuccess = (tarefa) => ({
    type: CRIAR_TAREFA_SUCCESS,
    payload: { tarefa }
});

export const criarTarefaFailure = (error) => ({
    type: CRIAR_TAREFA_FAILURE,
    payload: { error }
});

export const listarTarefaRequest = () => ({
    type: LISTAR_TAREFA_REQUEST,
});

export const listarTarefaSuccess = (tarefas) => ({
    type: LISTAR_TAREFA_SUCCESS,
    payload: { tarefas }
});

export const listarTarefaFailure = (error) => ({
    type: LISTAR_TAREFA_FAILURE,
    payload: { error }
});

export const updateTarefaRequest = (id,tarefa) => ({
    type: UPDATE_TAREFA_REQUEST,
    payload: {id,tarefa}
});

export const updateTarefaSuccess = (tarefa) => ({
    type: UPDATE_TAREFA_SUCCESS,
    payload: { tarefa }
});

export const updateTarefaFailure = (error) => ({
    type: UPDATE_TAREFA_FAILURE,
    payload: { error }
});

export const deleteTarefaRequest = (id) => ({
    type: DELETE_TAREFA_REQUEST,
    payload: {id}
});

export const deleteTarefaSuccess = () => ({
    type: DELETE_TAREFA_SUCCESS,
});

export const deleteTarefaFailure = (error) => ({
    type: DELETE_TAREFA_FAILURE,
    payload: { error }
});