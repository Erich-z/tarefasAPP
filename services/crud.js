import api from "./api";

const ConsomeAPi = {
    async criarTarefa(tarefa) {
        try{
            const response = await api.post('/tarefas', tarefa);
            return response.data;
        }catch (error){
            throw error;
            return null;
        }
    },
    async listarTarefas(){
        try{
            const response = await api.get('/tarefas');
            return response.data.dados;
        }catch(error){
            throw error
        }
    },
    async alterarTarefa(id,tarefa){
        try{
            const response = await api.put(`/tarefas/${id}`,tarefa);
            return response.data;
        }catch(error){
            throw error
        }
    },
    async exibirTarefa(id){
        try{
            const response = await api.get(`/tarefas/${id}`);
            return response.data;
        }catch(error){
            throw error
        }
    },
    async deletarTarefa(id){
        try{
            const response = await api.delete(`/tarefas/${id}`);
            return response.data;
        }catch(error){
            throw error
        }
    },




    async criarUsuario(usuario) {
        try{
            const response = await api.post('/usuarios', usuario);
            return response.data;
        }catch (error){
            throw error;
            return null;
        }
    },
    async listarUsuario(){
        try{
            const response = await api.get('/usuarios');
            return response.data.dados;
        }catch(error){
            throw error
        }
    },
    async alterarUsuario(id,usuario){
        try{
            const response = await api.put(`/usuarios/${id}`,usuario);
            return response.data;
        }catch(error){
            throw error
        }
    },
    async exibirUsuario(id){
        try{
            const response = await api.get(`/usuarios/${id}`);
            return response.data;
        }catch(error){
            throw error
        }
    },
    async deletarUsuario(id){
        try{
            const response = await api.delete(`/usuarios/${id}`);
            return response.data;
        }catch(error){
            throw error
        }
    },
    async login(usuario){
        try{
            const response = await api.post(`/login`,usuario);
            return response.data;
        }catch(error){
            throw error
        }
    },



}

export default ConsomeAPi