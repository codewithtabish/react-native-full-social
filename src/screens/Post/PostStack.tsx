import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../../screens';

const Stack = createNativeStackNavigator();

const PostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostStack" component={Screens.Post} />
    </Stack.Navigator>
  );
};

export default PostStack;

const styles = StyleSheet.create({});
