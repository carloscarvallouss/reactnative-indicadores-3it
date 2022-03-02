import React from "react";

import Main from "./src/components/Main";
import Precios from "./src/components/Precios";
import Detalle from "./src/components/Detalle";

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './src/custom-theme.json'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{ title: '3IT' }} />
            <Stack.Screen name="Detalle" component={Detalle} />
            <Stack.Screen name="Precios" component={Precios} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>

  );
}