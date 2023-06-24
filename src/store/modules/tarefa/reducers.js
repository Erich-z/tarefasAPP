import { CRIAR_TAREFA_FAILURE, CRIAR_TAREFA_REQUEST, CRIAR_TAREFA_SUCCESS, DELETE_TAREFA_FAILURE, DELETE_TAREFA_REQUEST, DELETE_TAREFA_SUCCESS, LISTAR_TAREFA_FAILURE, LISTAR_TAREFA_REQUEST, LISTAR_TAREFA_SUCCESS, SHOW_TAREFA_FAILURE, SHOW_TAREFA_REQUEST, SHOW_TAREFA_SUCCESS, UPDATE_TAREFA_FAILURE, UPDATE_TAREFA_REQUEST, UPDATE_TAREFA_SUCCESS } from './actions';

const initialState = {
    loading: false,
    tarefas: [],
    tarefa: null,
    error: null
}

const tarefaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TAREFA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SHOW_TAREFA_SUCCESS:
        return {
          ...state,
          tarefa: action.payload,
          loading: false,
        };
      case SHOW_TAREFA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LISTAR_TAREFA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CRIAR_TAREFA_REQUEST:
      case UPDATE_TAREFA_REQUEST:
      case DELETE_TAREFA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LISTAR_TAREFA_SUCCESS:
        return {
          ...state,
          loading: false,
          tarefas: action.payload,
          error: '',
        };
      case CRIAR_TAREFA_SUCCESS:
        return {
          ...state,
          loading: false,
          tarefas: [...state.tarefas, action.payload],
          error: '',
        };
      case UPDATE_TAREFA_SUCCESS:
        var index = state.tarefas.findIndex((tarefa) => tarefa.id === action.payload.id);
        state.tarefas[index]= action.payload;
        return {
          ...state,
          loading: false,
          tarefas: [...state.tarefas],
          error: '',
        };
      case DELETE_TAREFA_SUCCESS:
        var index = state.tarefas.findIndex((tarefa) => tarefa.id === action.payload);
        return {
          ...state,
          loading: false,
          tarefas: [
            ...state.tarefas.slice(0, index),
            ...state.tarefas.slice(index + 1)
          ],
          error: '',
        };
      case LISTAR_TAREFA_FAILURE:
      case CRIAR_TAREFA_FAILURE:
      case UPDATE_TAREFA_FAILURE:
      case DELETE_TAREFA_FAILURE:
        return {
          loading: false,
          tarefa: null,
          error: action.payload,
        };
      default:
        return state;
    }
};
export default tarefaReducer;