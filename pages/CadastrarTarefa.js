import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, TextInput, Text} from 'react-native';
import {addTarefa} from './db';
import ConsomeAPi from '../services/crud';
import { useDispatch, useSelector } from "react-redux";
import { criarTarefaRequest, updateTarefaRequest } from '../src/store/modules/tarefa/actions';

const CadastroScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const tarefa = useSelector(({tarefa}) => tarefa);
  const [novaTarefa, setNovaTarefa] = useState({
    descricao: '',

    data: '',

    hora: '',

    status: 'false',
  });

  function handleChange(text, nomeInput) {
    setNovaTarefa({...novaTarefa, [nomeInput]: text});
  }

  function cadastrarTarefa() {
    /*addTarefa(novaTarefa);//inseri no sqlite local

    ConsomeApi.criarTarefa(novaTarefa) //insere na api

    navigation.push('HomeScreen');*/

    if (novaTarefa.id > 0)
      dispatch(updateTarefaRequest(novaTarefa.id, novaTarefa));
    else dispatch(criarTarefaRequest(novaTarefa));

    if (tarefa.tarefas) navigation.push('HomeScreen');
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 20,
        }}>
        Cadastrar Tarefa
      </Text>

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="Titulo da tarefa"
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="Descrição da tarefa"
        onChangeText={text => handleChange(text, 'descricao')}
        value={novaTarefa.descricao}
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="data"
        onChangeText={text => handleChange(text, 'data')}
        value={novaTarefa.data}
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="Hora"
        onChangeText={text => handleChange(text, 'hora')}
        value={novaTarefa.hora}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => cadastrarTarefa()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroScreen;
