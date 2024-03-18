import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import TextComp from './TextComponent';
import strings from '../constonts/lang'
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';
import Colors from '../constonts/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const LanguageSelector = ({
    item,
    pressLang=()=>{}
}) => {
      const {isDark,lang}=useSelector((state)=>state?.appSettingSlice)
      console.log("Here lang is",lang)
  return (
    
            <TouchableOpacity
            onPress={()=>pressLang(item.languageCode)}
                className='flex justify-between items-center my-2 py-2 flex-row'>


            <TextComp text={item.language}
            style={{fontSize:textScale(17),marginVertical:moderateScaleVertical(0),
              color:"white"}}/>

             {lang===item.languageCode &&   <Icon name="checkmark" size={30} color={Colors.light.primary} className='mb-2' />}

            
              </TouchableOpacity>
  )
}

export default LanguageSelector

const styles = StyleSheet.create({})