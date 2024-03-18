import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const isDark = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <View
      className={`${
        isDark ? 'bg-dark-background' : 'bg-light-background'
      } flex-1`}>
      <Text
        className={`${
          isDark ? 'text-dark-textPrimary' : 'text-light-textPrimary'
        } `}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        ducimus, dolorum tempore suscipit placeat commodi non excepturi, itaque
        aspernatur facere odit hic amet modi fuga exercitationem maiores! Et,
        officia vero!
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
