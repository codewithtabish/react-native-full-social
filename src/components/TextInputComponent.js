//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from '../constonts/fontFamily';
import Colors from '../constonts/Colors';

// create a component
const TextInputComponent = ({
    value = '',
    onChangeText,
    placeholder = '',
    secureText = false,
    onPressSecure = () => {},
    inputStyle = {},
    textStyle = {},
    placeholderTextColor = Colors.light.gray,
    ...props
}) => {


    return (
        <View
        className='border-[1px] border-gray-400 '
         style={{
            ...styles.inputStyle,
            ...inputStyle,
            
        }}>
            <TextInput 
            style={{
                ...styles.textStyle,
                ...textStyle,
                // textAlign: lang == 'ar'? 'right': 'left'
            }}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureText}

            {...props}
            />
            {/* {!!secureText? <Text style={{...styles.textStyle,flex:0}} onPress={onPressSecure}>{secureText}</Text>:null} */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
     height:moderateScale(52),
     borderRadius:moderateScaleVertical(8),
     flexDirection:'row',
     justifyContent:'space-between',
     paddingHorizontal:moderateScale(16),
     alignItems:'center',
     
    //  backgroundColor:Colors.light.gray,
     marginBottom:moderateScaleVertical(16)
    },
    textStyle:{
        fontSize:textScale(14),
        fontFamily:fontFamily.regular,
        flex:1,
        // color:Colors.light.error
    }
});

//make this component available to the app
export default TextInputComponent;