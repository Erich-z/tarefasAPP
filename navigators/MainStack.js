import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../pages/Login';
import CadastroScreen from '../pages/Cadastro';
import HomeScreen from '../pages/ToDoList';
import CadastrarTarefa from '../pages/CadastrarTarefa';
import ViewTarefa from '../pages/ViewTarefa';
import UsuarioDados from '../pages/UsuarioDados';
import ListUsuario from '../pages/Usuarios';
import { getData } from '../services/local';
import { useSelector, useDispatch } from "react-redux";
const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const dispatch = useDispatch();
    const auth = useSelector(({auth}) => auth);
    console.log(auth);
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
      {auth.isAuthenticated ? (
          <>
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="CadastrarTarefa"
            component={CadastrarTarefa}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="ViewTarefa"
            component={ViewTarefa}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="UsuarioDados"
            component={UsuarioDados}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="ListUsuario"
            component={ListUsuario}
          />
        </>
      ) : (
        <>
        <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="CadastroScreen"
            component={CadastroScreen}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
