import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import HomeHeader from './src/components/HomeHeader';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  // Define a prop named "message"
  const message = 'Hello from ParentComponent';

  // Display toast message based on the detected color scheme
  if (isDarkMode) {
    // Dark mode is enabled
    ToastAndroid.show('Dark mode is enabled', ToastAndroid.SHORT);
    // Implement dark mode styles or behavior
  } else {
    // Light mode is enabled or no preference specified
    ToastAndroid.show('Light mode is enabled', ToastAndroid.SHORT);
    // Implement light mode styles or behavior
  }
  // backgroundColor: isDarkMode ? '#000000' : '#ffffff';
  return (
    <View
      style={{flex: 1}}
      className="bg-light-background dark:bg-dark-background">
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
        />
        <ScrollView
          contentContainerStyle={{
            padding: 15,
          }}>
          <HomeHeader message={message} />
          <Text
            // style={{color: isDarkMode ? '#ffffff' : '#000000'}}
            className="text-light-textPrimary dark:text-dark-textPrimary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            voluptatem itaque, repellat, eaque distinctio adipisci beatae eum
            aperiam vitae maiores aliquid non quisquam ab similique quasi optio
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-light-primary p-3 rounded-md my-4 w-1/2 dark:bg-dark-primary">
            <Text>Show Data</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
