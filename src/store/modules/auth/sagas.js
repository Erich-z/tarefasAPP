import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../../services/api';
import { loginFailure, loginSuccess, LOGIN_REQUEST } from './actions';

export function* login(action) {
    try {
        const response = yield call(() => api.post('/login', action.payload));
        console.log(response.data.token);
        yield put(loginSuccess(response.data.token));
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export default all([
    takeLatest(LOGIN_REQUEST, login)
]);