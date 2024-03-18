import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import Routes from './src/navigations/Routes';
import {styled, useColorScheme as useNativeWindColorScheme} from 'nativewind';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1">
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
