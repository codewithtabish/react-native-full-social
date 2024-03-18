import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fontFamily from '../constonts/fontFamily'
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

const CustomButton = ({
    onPress=()=>{},
    text='',
    buttonStyle={},
    textStyle={},
    leftIconName
}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...styles.buttonContainer, ...buttonStyle }}
      onPress={onPress}
    >
      {leftIconName ? <Icon name={leftIconName} color={'white'} size={26} />:<View></View>}
      <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      <View></View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#787276',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    // justifyContent: 'center',
    borderRadius: 10,
    height: moderateScale(46),
  },
  textStyle: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(14),
    marginLeft: 10,
    color: 'white',
  },
});
