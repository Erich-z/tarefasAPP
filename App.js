import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native"
import MainStack from './navigators/MainStack'

import { Provider } from 'react-redux';
import store from "./src/store";
function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;