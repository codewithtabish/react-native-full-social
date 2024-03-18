import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../../screens';

const Stack = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationStack" component={Screens.Notification} />
    </Stack.Navigator>
  );
};

export default NotificationStack;

const styles = StyleSheet.create({});
