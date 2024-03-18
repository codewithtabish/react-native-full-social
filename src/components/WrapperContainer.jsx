import { StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Colors from '../constonts/Colors';
import { useSelector } from 'react-redux';


const WrapperContainer = ({children}) => {
      const isDark = useColorScheme() === 'dark';
      const isDarkTheme=useSelector((state)=>state?.appSetting?.isDark)
      console.log("useColorScheme",isDarkTheme)
  return (
    <View 
    style={{backgroundColor:isDarkTheme?Colors.dark.background:Colors.light.background}}
    className='bg-white flex-1'
    //   className={`${
    //     isDark ? 'bg-dark-background' : 'bg-light-background'
    //   } flex-1`}
    >
         <StatusBar
          backgroundColor={isDarkTheme?Colors.dark.background:"#f5f5f5"}
          barStyle={!isDarkTheme ? 'dark-content' : 'light-content'}
        />
        {children}
    </View>
  )
}

export default WrapperContainer

const styles = StyleSheet.create({})