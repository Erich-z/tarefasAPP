import React, {useEffect, useState} from 'react';
import { TouchableOpacity, View,TextInput, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ConsomeAPi from "../services/crud";



const CadastroScreen = ({navigation}) => {
  const route = useRoute();
  const [tarefaState, setTarefaState] = useState(route.params.tarefa);
  function deletarTarefa(){
    ConsomeAPi.deletarTarefa(tarefaState.id)
    navigation.push('HomeScreen')
  }
  

  const handleChange = (text, nome) => {
    setTarefaState({...tarefaState, [nome]: text})
  }

 
function alterarTarefa(){
  ConsomeAPi.alterarTarefa(tarefaState.id, tarefaState) 
  console.log(tarefaState)
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
        onChangeText={(text) => handleChange(text,'descricao')}
        value={tarefaState.descricao}
      />
    
      
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        onChangeText={(text) => handleChange(text,'data')}
        value={tarefaState.data}
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor='#000'
        onChangeText={(text) => handleChange(text,'hora')}
        value={tarefaState.hora}
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


export default CadastroScreen;
