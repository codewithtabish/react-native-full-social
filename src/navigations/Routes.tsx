import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Routes = (): React.JSX.Element => {
  const [isLogin, setisLogin] = useState<Boolean>(false);
  const {userData} = useSelector(state => state.authReducer);
  console.log(userData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!userData?.isLogin ? MainStack() : AuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
