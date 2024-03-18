import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import navigationString from '../../navigations/navigationString';
import WrapperContainer from '../../components/WrapperContainer';

const Home = () => {
  const isDark = useColorScheme() === 'dark';
  const navi = useNavigation();

  return (
    <WrapperContainer>
    
      <Text
        className={`${
          isDark ? 'text-dark-textPrimary' : 'text-light-textPrimary'
        }  m-5`}
        style={{
          fontFamily:"GFSNeohellenic-bold"
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero
        labore corporis earum accusantium, tempora, officiis fuga exercitationem
        corrupti eveniet, maiores veniam praesentium deserunt impedit? Facilis
        non asperiores maxime magnam!
      </Text>
      <TouchableOpacity
      className='w-1/2 mx-auto bg-gray-500 p-2 rounded-md'>
        <Text className='dark:text-dark-textPrimary text-light-background'>Search Go</Text>
      </TouchableOpacity>
     
    </WrapperContainer>
  
  );
};

export default Home;

const styles = StyleSheet.create({});
