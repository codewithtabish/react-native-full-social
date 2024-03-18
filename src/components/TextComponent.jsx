//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { textScale } from '../styles/responsiveSize';
import fontFamily from '../constonts/fontFamily';
import Colors from '../constonts/Colors';

// create a component
const TextComp = ({
    text = '',
    style = {},
    children,
    myClass='text-red-400',
    ...props
}) => {
    const isDarkTheme = useSelector(state => state?.appSetting?.isDark)

    return (
            <Text 
            className={myClass}

            style={{
                ...styles.textStyle, 
                color: isDarkTheme? Colors.dark.textPrimary:Colors.light.textPrimary,
                ...style,
        
            }}
            {...props}
            >{text} {children}</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fontFamily.regular,
        color: Colors.light.background,
        fontSize:textScale(12),
        textAlign:'left'
    },
});


export default TextComp;