import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home'

const Stack = createNativeStackNavigator();


export default function App() {
      return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >

          <Stack.Screen name="Home" component={Home} />
          
        </Stack.Navigator>
        </NavigationContainer>
      );
    }