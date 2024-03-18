import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import store from '../../redux/store';
import {saveUserData} from '../../redux/reducers/auth';
import {logout} from '../../redux/actions/authAction';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamily from '../../constonts/fontFamily';
import imagePath from '../../constonts/imagePath';
import strings from '../../constonts/lang';
import CustomButton from '../../components/CustomButton';
import Colors from '../../constonts/Colors';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import navigationString from '../../navigations/navigationString';
import TextComp from '../../components/TextComponent';
import ModalComponent from '../../components/ModalComponent';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { changeLanguageMethod } from '../../redux/actions/settingAction';
import languages from '../../constonts/languages';
import LanguageSelector from '../../components/LanguageSelector';

const InitialScreen = ({navigation}) => {
  const [isVisible, setisVisible] = useState(false)
  const {isDark,lang}=useSelector((state)=>state?.appSettingSlice)
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
  const handleModal=()=>{
    setisVisible(!isVisible)
  }

  const pressLang=(selectedLanguage)=>{
    changeLanguageMethod(selectedLanguage)
    setisVisible(!isVisible)
  
    
  }


  return (
    <WrapperContainer >
      <TouchableOpacity
      onPress={handleModal}
      className='w-10 self-end h-10 rounded-full mt-3 bg-light-primary flex-row justify-center items-center mx-4'>
        {/* <Text className='text-white'>{lang}</Text> */}
        <TextComp text={lang}
        style={{color:"white",fontSize:15}}/>
      </TouchableOpacity>
      <View className="items-center mx-5  justify-end " style={{flex:.3}}>
        <Image source={imagePath.appLogo}
        style={{...styles.imageStyle}} className="" />

        <TextComp
        text= {strings.BY_CLICKING_LOGIN}
          // className='text-gray-500 text-center max-w-[85%] '
          style={{
            marginVertical:moderateScaleVertical(1),
            fontFamily: fontFamily.bold,
            fontSize:textScale(16),
            // fontWeight:"bold",
            textAlign:"center",
            maxWidth:"85%",
            lineHeight:moderateScaleVertical(25)

          }}
          >
         

            
           <TextComp  onPress={()=>privacyPolicy(1)} text={strings.Terms}
           style={{color:Colors.light.primary,
            fontFamily: fontFamily.bold,
            fontSize:textScale(16),
            fontWeight:"bold",
            textAlign:"center",
            }}
            /> 
          <TextComp text={strings.LEARN_HOW_WE_PROCESS}
             style={{
            marginVertical:moderateScaleVertical(1),
            fontFamily: fontFamily.bold,
            fontSize:textScale(16),
            // fontWeight:"bold",
            textAlign:"center",
            lineHeight:moderateScaleVertical(25)

          }}
          /> 
          <TextComp text={strings.Privacy_Policy}
             style={{
            marginVertical:moderateScaleVertical(1),
            fontFamily: fontFamily.bold,
            fontSize:textScale(16),
            fontWeight:"bold",
            textAlign:"center",
            lineHeight:moderateScaleVertical(25),
            color:Colors.light.primary

          }}/> 
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
        <ModalComponent
        onBackdropPress={()=>setisVisible(!isVisible)}
        isVisible={isVisible}
        style={{justifyContent:"flex-end",margin:0,
        position:"absolute",
        left:"15%",right:"15%",top:"5%",height:moderateScale(210)}}>
          <View 
          className='h-full rounded-2xl px-4 py-5 '
          style={{backgroundColor:"rgba(0,0,0,.7)"}}>
            <TextComp text={strings.Chose_Language}
            style={{fontSize:textScale(20),
              color:"white",
            fontWeight:"bold"}}/>

            {
              languages.map((item,index)=>{
                return (
                  <LanguageSelector key={index} item={item}
                  pressLang={pressLang}
                  />
                )
              })
            }

{/* 
            <TouchableOpacity
             onPress={()=>pressLang(strings.Arabic)}
                className='flex justify-between items-center my-2 flex-row py-2'>


            <TextComp text={strings.Arabic}
            style={{fontSize:textScale(17),marginVertical:moderateScaleVertical(0),
              color:"white"}}/>
              {lang==='ar' &&   <Icon name="checkmark" size={30} color={Colors.light.primary} className='mb-2' />}


            
              </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>pressLang(strings.Urdu)}
                className='flex justify-between items-center my-2 flex-row'>


            <TextComp text={strings.Urdu}
            style={{fontSize:textScale(17),marginVertical:moderateScaleVertical(0),
              color:"white"}}/>

              {lang==='ur' &&   <Icon name="checkmark" size={30} color={Colors.light.primary} className='mb-2' />}

            
              </TouchableOpacity> */}


           

        

         
          </View>

          </ModalComponent>

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
