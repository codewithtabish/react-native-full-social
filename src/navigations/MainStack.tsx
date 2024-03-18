import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Screen from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from './navigationString';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name={navigationString.tabsRoutes}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
