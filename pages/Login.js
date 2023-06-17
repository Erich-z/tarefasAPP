import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  TouchableOpacityComponent,
} from 'react-native';
import ConsomeAPi from '../services/crud';
import { storeData } from '../services/local';
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from '../src/store/modules/auth/actions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //manipular os dados do formulario dos inputs
  const [dados, setDados] = useState({Email: '', senha: ''});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  //acao de fazer login ao clicar no botao entrar
  const handleLogin = () => {
    /*ConsomeApi.login(dados)
    .then((token) => {
      //console.log(token);
      storeData('@login_token',token)
    })
    .catch(error => console.log(error));*/
    dispatch(loginRequest(dados.Email,dados.senha));
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
        Seja Bem-Vindo
      </Text>
      <TextInput
        id="email"
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
         
        }}
        placeholderTextColor='#000'
        placeholder="e-mail"
        value={dados.Email}
        onChangeText={(text)=> handleChange(text, 'Email')}
        keyboardType="email-address"
      />

      <TextInput
        id="senha"
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
          
        }}
        placeholderTextColor='#000'
        placeholder="senha"
        value={dados.senha}
        onChangeText={(text)=> handleChange(text, 'senha')}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleLogin()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Entrar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row'}}>
        <Text style={{marginRight: 2,color: '#000', fontWeight: 'bold'}}>Não possui uma conta?</Text>
        <TouchableOpacity 
        onPress={() => navigation.push('CadastroScreen')}
        >
          <Text style={{fontWeight: 'bold', color: '#8a2be2'}}>Cria Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
