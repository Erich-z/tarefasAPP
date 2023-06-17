import React, {useEffect, useState} from 'react';
import { TouchableOpacity, View,TextInput, Text, Alert } from 'react-native';
import ConsomeAPi from "../services/crud";
import { useSelector, useDispatch } from "react-redux";
import { criarUsuarioRequest } from '../src/store/modules/usuario/actions';
import ModalSpinner from './ModalSpinner';

const CadastroScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const usuario = useSelector(({usuario}) => usuario);
  const [dados, setDados] = useState({Nome: '',Email: '', senha: ''});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  //acao de fazer login ao clicar no botao entrar
  const handleCadastrar = () => {
    dispatch(criarUsuarioRequest(dados, navigation));
  }
  if(usuario.loading) {
    return <ModalSpinner />
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
      Crie sua conta
      </Text>

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        placeholder="Nome"
        onChangeText={(text) => handleChange(text,'Nome')}
        value={dados.Nome}
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={(text) => handleChange(text,'Email')}
        value={dados.Email}
      />
    
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        placeholder="senha"
        secureTextEntry={true}
        onChangeText={(text) => handleChange(text,'senha')}
        value={dados.senha}
      />
  
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleCadastrar()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Cadastrar</Text>
      </TouchableOpacity>
      
    </View>
  );
  
}


export default CadastroScreen;
