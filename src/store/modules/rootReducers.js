import { combineReducers } from 'redux';
import auth from './auth/reducers';
import usuario from './usuario/reducers';
import tarefa from './tarefa/reducers';


export default combineReducers({
    auth,
    usuario, 
    tarefa
});