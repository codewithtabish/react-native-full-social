import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {moderateScale, moderateScaleVertical, textScale} from '../../styles/responsiveSize';
import strings from '../../constonts/lang';
import TextInputComponent from '../../components/TextInputComponent';
import fontFamily from '../../constonts/fontFamily';
import HeaderComponent from '../../components/HeaderComonent';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constonts/Colors';

const Login = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [secureText, setsecureText] = useState(true)
  return (
    <WrapperContainer>
      <HeaderComponent/>
      <View className="flex-1" style={{padding: moderateScale(18)}}>
        <View className='' style={{flex:.3}}>
            <Text className="text-light-textPrimary font-bold"
        style={{...styles.headerStyle}}>{strings.Welcome_Back}</Text>
        <Text className='italic' style={{...styles.descStyle}}>{strings.We_Are_Happy}</Text>
           <View className=''>
        <TextInputComponent 
        value={email}
        placeholder={strings.Email}
        onChangeText={(value)=>setemail(value)}
        // secureText={secureText}
        />
        <TextInputComponent 
        
        value={password}
        placeholder={strings.Password}
        onChangeText={(value)=>setpassword(value)}
        secureText={secureText}
        onPressSecure={()=>setsecureText(!secureText)}
        />
        <View className='flex justify-between items-center my-2 flex-row'>
          <Text></Text>
          <TouchableOpacity><Text>{strings.Forgot_Password}</Text></TouchableOpacity>
        </View>

        </View>
      </View>

   
        <View className=' justify-end' style={{flex:.7}}>
          <CustomButton
          buttonStyle={{backgroundColor:Colors.light.primary}}
          text={strings.Login}/>

        </View>
      
      </View>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerStyle:{
    fontSize:textScale(24),
    fontFamily:fontFamily.semiBold
  },
     descStyle: {
        fontSize: textScale(13),

        fontFamily: fontFamily.regular,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(52)
    }
});
