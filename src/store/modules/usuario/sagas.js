import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../../services/api';
import { criarUsuarioFailure, criarUsuarioSuccess, CRIAR_USUARIO_REQUEST } from './actions';

export function* criarUsuario(action) {
    try {
        const response = yield call(() => api.post('/usuarios', action.payload.usuario));
        console.log(response.data);
        yield put(criarUsuarioSuccess(response.data, action.payload.navigation));
    } catch (error) {
        yield put(criarUsuarioFailure(error));
    }
}

export default all([
    takeLatest(CRIAR_USUARIO_REQUEST, criarUsuario)
]);