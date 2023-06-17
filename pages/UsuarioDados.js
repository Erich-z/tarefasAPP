import React, {useEffect, useState} from 'react';
import { TouchableOpacity, View,TextInput, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ConsomeAPi from "../services/crud";



const UsuarioScreen = ({navigation}) => {
  const route = useRoute();
  const [usuarioState, setUsuarioState] = useState(route.params.tarefa);
  function deletarTarefa(){
    ConsomeAPi.deletarUsuario(usuarioState.id)
    navigation.push('HomeScreen')
  }
  

  const handleChange = (text, nome) => {
    setUsuarioState({...usuarioState, [nome]: text})
  }

 
function alterarTarefa(){
  ConsomeAPi.alterarUsuario(usuarioState.id, usuarioState) 
  console.log(usuarioState)
  navigation.push('HomeScreen')
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
      Detalhes da tarefa
      </Text>


      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        onChangeText={(text) => handleChange(text,'Nome')}
        value={usuarioState.Nome}
      />
    
      
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        onChangeText={(text) => handleChange(text,'Email')}
        value={usuarioState.Email}
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        onChangeText={(text) => handleChange(text,'senha')}
        value={usuarioState.senha}
      />
     
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 2
        }}
        onPress={() => deletarTarefa()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Deletar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 2
        }}
        onPress={alterarTarefa}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.push('HomeScreen')}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Voltar</Text>
      </TouchableOpacity>
      
    </View>
  );
  
}


export default UsuarioScreen;
