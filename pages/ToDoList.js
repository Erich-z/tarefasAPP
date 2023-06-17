import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import style from "../css/style";
import * as Icon from "react-native-feather";
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import SQLite from "react-native-sqlite-storage";
import { criarTabela, db, listarTarefas } from "./db";

import {Dimensions} from 'react-native';
import ConsomeAPi from "../services/crud";
const windowHeight = Dimensions.get('window').height;


  const ItemList = ({tarefa})  =>{
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(tarefa.status)
    function alterarTarefa(){
      ConsomeAPi.alterarTarefa(tarefa.id, tarefa) 
      console.log(tarefa)
    }
    return(
    <TouchableOpacity onPress={()=> navigation.push('ViewTarefa', {tarefa:tarefa})}>
    <View style={[style.container, {backgroundColor: toggleCheckBox ? '#900' : '#EBF8A4'}]}>
    <View style={style.boxtext}>
    <Text style={{fontWeight: 'bold', color: '#000'}}>{tarefa.descricao}</Text>
    <Text style={{fontWeight: 'bold', color: '#000'}}>{tarefa.data}</Text>
    </View>
    <CheckBox
    style={{position: 'absolute', right: 0,top: 10}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => {setToggleCheckBox(newValue); tarefa.status = newValue; alterarTarefa()}}
  />
    </View>
     </TouchableOpacity>
    )
  }

  function App({navigation}){
 
    const [tarefasDados, setTarefasDados] = useState([]);
    useEffect(() => {
      ConsomeAPi.listarTarefas()
      .then((dados)=>{
        //console.log(dados);
        setTarefasDados(dados);
      })
      .catch(); 
      
      
      // criarTabela();
        //listar todas as tarefas do banco
       /* db.transaction(async (tx) => {
            await tx.executeSql('SELECT * FROM tasks', 
                [], 
                (txt, result) => {
                    let tarefasArray = [];
                    let len = result.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = result.rows.item(i); 
                        tarefasArray.push(row);        
                    }
                    setTarefasDados(tarefasArray);
                },
                (error) => {console.log(error)}
            );
          });*/
    
    }, [])

    return(
     <SafeAreaView style={{height:windowHeight}}>
      
       <View style={{flexDirection: 'row', alignItems:'center', }}>
        <TouchableOpacity><Text style={{color: '#000', fontWeight: 'bold', fontSize: 40, margin: 20, }}>Tarefas Pendentes</Text></TouchableOpacity>
        <TouchableOpacity style={{right: 10}} onPress={() => navigation.push('ListUsuario')}><Icon.User stroke="#000" fill="#000" width={32} height={32} /></TouchableOpacity>
        
        </View>

       
      <FlatList style={{minHeight: '100%', minWidth: '100%'}}
        data = {tarefasDados}
        renderItem={({ item }) => <ItemList tarefa={item} />}
        keyExtractor={item => item.id}
      />
     

      <TouchableOpacity style={ style.bottomView} onPress={() => navigation.push('CadastrarTarefa')}>
        <Icon.Plus stroke="#fff" fill="#fff" width={32} height={32} />

        <Text style={{color:'#fff'}}>{windowHeight.toFixed(2)}</Text>
      </TouchableOpacity>
     </SafeAreaView>
    );
  };
  export default App;