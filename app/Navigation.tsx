import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from './index';
import Detalhes from './Detalhes';
import Estados from './Estados';

export type RootStackParamList = {
  index: undefined;
  Detalhes: { id: number; de: string; para: string; valor: number };
  Estados: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Estados" component={Estados} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
