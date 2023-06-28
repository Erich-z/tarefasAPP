import {call, put, all, takeLatest, select, delay} from 'redux-saga/effects';
import api from '../../../../services/api';
import { CRIAR_TAREFA_FAILURE, CRIAR_TAREFA_REQUEST, CRIAR_TAREFA_SUCCESS, DELETE_TAREFA_FAILURE, DELETE_TAREFA_REQUEST, DELETE_TAREFA_SUCCESS, LISTAR_TAREFA_FAILURE, LISTAR_TAREFA_REQUEST, LISTAR_TAREFA_SUCCESS, SHOW_TAREFA_FAILURE, SHOW_TAREFA_REQUEST, SHOW_TAREFA_SUCCESS, UPDATE_TAREFA_FAILURE, UPDATE_TAREFA_REQUEST, UPDATE_TAREFA_SUCCESS } from './actions';

function* listarTarefa(action) {
  try {
    yield delay(3000);
    const state = yield select();
    const usuarioId = state.usuario.usuario.id;
    const response = yield call(() => api.get(`/tarefas/?usuarioId=${usuarioId}`));
    const tarefa = response.data;
    console.log(tarefa);
    yield put({ type: LISTAR_TAREFA_SUCCESS, payload: tarefa });
  } catch (error) {
    yield put({ type: LISTAR_TAREFA_FAILURE, payload: error.message });
  }
  }
  
  function* showTarefa(action) {
    try {
      
      const response = yield call(() => api.get(`/tarefas/${action.payload}`));
      const tarefa = response.data;
      yield put({ type: SHOW_TAREFA_SUCCESS, payload: tarefa });
    } catch (error) {
      yield put({ type: SHOW_TAREFA_FAILURE, payload: error.message });
    }
  }
  
  // add empresa
  function* criarTarefa(action) {
    try {
      const state = yield select();
      const usuarioId = state.usuario.usuario.id;
      const response = yield call(() => api.post(`/tarefas/?usuarioId=${usuarioId}`, action.payload.tarefa));
      const tarefa = response.data;
      yield put({ type: CRIAR_TAREFA_SUCCESS, payload: tarefa });
    } catch (error) {
      yield put({ type: CRIAR_TAREFA_FAILURE, payload: error.message });
    }
  }
  
  // update empresa
  function* updateTarefa(action) {
    try {
      const response = yield call(() => api.put(`/tarefas/${action.payload.id}`, action.payload.tarefa));
      const tarefa = response.data;
      yield put({ type: UPDATE_TAREFA_SUCCESS, payload: tarefa });
    } catch (error) {
      yield put({ type: UPDATE_TAREFA_FAILURE, payload: error.message });
    }
  }
  
  // delete empresa
  function* deleteTarefa(action) {
    try {
      yield call(() => api.delete(`/tarefas/${action.payload.id}`));
      yield put({ type: DELETE_TAREFA_SUCCESS, payload: action.payload });
    } catch (error) {
      yield put({ type: DELETE_TAREFA_FAILURE, payload: error.message });
    }
  }
  
  
  export default all([
    takeLatest(DELETE_TAREFA_REQUEST, deleteTarefa),
    takeLatest(UPDATE_TAREFA_REQUEST, updateTarefa),
    takeLatest(CRIAR_TAREFA_REQUEST, criarTarefa),
    takeLatest(SHOW_TAREFA_REQUEST, showTarefa),
    takeLatest(LISTAR_TAREFA_REQUEST, listarTarefa),
  ])