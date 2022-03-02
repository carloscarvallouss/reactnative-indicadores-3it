import React from "react";

import Main from "./src/components/Main";
import Precios from "./src/components/Precios";
import Detalle from "./src/components/Detalle";

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ title: 'INDICADORES FINANCIEROS' }} />
        <Stack.Screen name="Detalle" component={Detalle} />
        <Stack.Screen name="Precios" component={Precios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}