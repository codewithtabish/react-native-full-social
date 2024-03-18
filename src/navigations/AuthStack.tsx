import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Screen from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from './navigationString';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
      <Stack.Screen
        name={navigationString.InitialScreen}
        component={Screen.InitailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.login}
        component={Screen.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.signup}
        component={Screen.Signup}
        options={{headerShown: false}}
      />
    </>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
