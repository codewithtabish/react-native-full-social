import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import strings from '../../constonts/lang';
import TextInputComponent from '../../components/TextInputComponent';
import fontFamily from '../../constonts/fontFamily';
import Colors from '../../constonts/Colors';
import HeaderComponent from '../../components/HeaderComonent';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {
  const [userName, setuserName] = useState()
  const [fullName, setFullName] = useState()
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [secureText, setsecureText] = useState(true);

  return (
    <WrapperContainer>
      <HeaderComponent />
      <View className="flex-1" style={{padding: moderateScale(18)}}>
        <View className="" style={{flex: 0.7}}>
          <Text
            className="text-light-textPrimary font-bold"
            style={{...styles.headerStyle}}>
            {strings.Create_An_Account}
          </Text>
          <Text className="italic" style={{...styles.descStyle}}>
            {strings.Create_An_Account_So_You_Can_Continue}
          </Text>
          <View className="">
            <TextInputComponent
            
              value={userName}
              placeholder={strings.Email}
              onChangeText={value => setuserName(value)}
              // secureText={secureText}
            />
            <TextInputComponent
              value={fullName}
              placeholder={strings.Password}
              onChangeText={value => setFullName(value)}
              secureText={secureText}
              onPressSecure={() => setsecureText(!secureText)}
            />
            <TextInputComponent
              value={email}
              placeholder={strings.Password}
              onChangeText={value => setemail(value)}
              secureText={secureText}
              onPressSecure={() => setsecureText(!secureText)}
            />
            <TextInputComponent
              value={password}
              placeholder={strings.Password}
              onChangeText={value => setpassword(value)}
              secureText={secureText}
              onPressSecure={() => setsecureText(!secureText)}
            />
            <TextInputComponent
              value={confirmPassword}
              placeholder={strings.Password}
              onChangeText={value => setConfirmPassword(value)}
              secureText={secureText}
              onPressSecure={() => setsecureText(!secureText)}
            />
           
          </View>
        </View>

        <View className=" justify-end" style={{flex: 0.3}}>
          <CustomButton
            buttonStyle={{backgroundColor: Colors.light.primary}}
            text={strings.Login}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: textScale(24),
    fontFamily: fontFamily.semiBold,
  },
  descStyle: {
    fontSize: textScale(13),

    fontFamily: fontFamily.regular,
    marginTop: moderateScaleVertical(8),
    marginBottom: moderateScaleVertical(52),
  },
});
