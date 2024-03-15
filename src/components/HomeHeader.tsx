import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type propsType = {
  message: String;
};

const HomeHeader: React.FC<propsType> = ({message}): React.JSX.Element => {
  message = 'This is randeom data';
  return (
    <View className="bg-light-primary dark:bg-dark-primary p-3">
      <Text className="text-light-surface dark:text-dark-textPrimary">
        {message}.
      </Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
