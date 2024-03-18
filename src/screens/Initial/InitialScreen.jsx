import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import store from '../../redux/store';
import {saveUserData} from '../../redux/reducers/auth';
import {logout} from '../../redux/actions/authAction';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamily from '../../constonts/fontFamily';
import imagePath from '../../constonts/imagePath';
import strings from '../../constonts/lang';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constonts/Colors';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import navigationString from '../../navigations/navigationString';
import TextComp from '../../components/TextComponent';

const InitialScreen = ({navigation}) => {
  const handleLogin = () => {
    store.dispatch(saveUserData({isLogin: true}));
  };

  const privacyPolicy=(type=1)=>{
    if(type==1){
      alert('Terms')
    }else{
      alert("Policy")
    }

  }


  return (
    <WrapperContainer >
      <View className="items-center mx-5  justify-end " style={{flex:.3}}>
        <Image source={imagePath.appLogo}
        style={{...styles.imageStyle}} className="" />

        <TextComp
        myClass={'text-red-900 text-3xl'}
        // className={'text-3xl text-red-300 max-w-[60%]'}
        text= {strings.BY_CLICKING_LOGIN}
          // className='text-gray-500 text-center max-w-[85%] '
          style={{
            marginVertical:moderateScaleVertical(1),
            // fontFamily: fontFamily.bold,
            fontSize:textScale(15),
            marginVertical:moderateScaleVertical(4),
            textAlign:"center",
            lineHeight:moderateScaleVertical(24)

          }}>
         

            
           <TextComp  onPress={()=>privacyPolicy(1)} text={strings.Terms}/> 
          <TextComp text={strings.LEARN_HOW_WE_PROCESS}/> 
          <TextComp text={strings.Privacy_Policy}/> 
          {/* <TextComp onPress={()=>privacyPolicy(1)  /> */}

        </TextComp>
      </View>
      <View className='mx-5  flex-col justify-center  ' style={{flex:.7}}>

        <CustomButton
        onPress={()=>navigation.navigate(navigationString.login)}
         text={strings.Login_With_Phone_Number}
        buttonStyle={{backgroundColor:Colors.light.primary,
        marginVertical:moderateScaleVertical(16)}}
        textStyle={{color:Colors.light.background}}/>

        <Text 
        className='text-light-textPrimary'
        style={{marginVertical:moderateScaleVertical(8),textAlign:"center",
      fontFamily:"GFSNeohellenic-Bold"}}>{strings.OR}</Text>

             
        <CustomButton  text={strings.Login_With_Facebook}
        buttonStyle={{marginVertical:moderateScaleVertical(10)}}
         leftIconName={'logo-facebook'}
       
        textStyle={{color:Colors.light.background}}/>


        <CustomButton text={strings.Login_With_Google}
         leftIconName={'logo-google'}
        buttonStyle={{marginVertical:moderateScaleVertical(10)}}
        textStyle={{color:Colors.light.background}}/>


        <CustomButton text={strings.Login_With_Apple}
         leftIconName={'logo-apple'}
        buttonStyle={{marginVertical:moderateScaleVertical(10)}}
        textStyle={{color:Colors.light.background}}/>

        <View className='flex flex-row items-center justify-center gap-2 my-1'>
          <Text className='text-light-textPrimary'>{strings.New_Here}</Text>
          <TouchableOpacity style={{color:Colors.light.primary,
          fontFamily:fontFamily.bold,fontSize:18}}
          onPress={()=>navigation.navigate(navigationString.signup)}>
            <Text className='text-light-primary font-bold'>
              {strings.Sign_Up}
              </Text>
          </TouchableOpacity>
        </View>
       
        </View>

    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  imageStyle:{
    width:moderateScale(150),
    height:moderateScale(150),
    borderRadius:moderateScale(150/2)

  }

});
