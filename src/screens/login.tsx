import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  LockClosedIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from 'react-native-heroicons/solid';
import Facebook from '../components/Icons/Facebook';
import GmailIcon from '../components/Icons/Gmail';
import AppleIcon from '../components/Icons/Apple';

import GlobalStyles from '../GlobalConfig/GlobalStylesheet';
import {primaryColor} from '../GlobalConfig/Colors';
import { Screen } from 'react-native-screens';

export default function LoginScreen({navigation}: any) {
  const [showPassword, setShowPasswrd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changePasswordVisiblity = () => {
    setShowPasswrd(!showPassword);
  };
  const goToForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };
  const onLoginPress = () => {
    console.log(email, password);
    navigation.navigate('Home',{screen:"HomeScreen"});
  };
  const goToSignUp = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Image
        source={require('../assets/images/logo1.png')}
        style={{alignSelf: 'center', marginTop: 100}}
      />
      <View style={GlobalStyles.HeadingContainer}>
        <Text style={GlobalStyles.Heading}>Login</Text>
        <Text style={GlobalStyles.Paragraph}>
          Login to continue using the app.
        </Text>
      </View>
      <View style={GlobalStyles.LabelAndFieldConatiner}>
        <Text style={GlobalStyles.InputLabel}>Email</Text>
        <View style={GlobalStyles.InputFieldConatiner}>
          <EnvelopeIcon color={primaryColor} />
          <TextInput
            textContentType="emailAddress"
            style={GlobalStyles.InputField}
            placeholder="Enter Your Email .."
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>
      </View>
      <View style={GlobalStyles.LabelAndFieldConatiner}>
        <Text style={GlobalStyles.InputLabel}>Password</Text>
        <View style={GlobalStyles.InputFieldConatiner}>
          <LockClosedIcon color={primaryColor} />
          <TextInput
            textContentType="password"
            style={GlobalStyles.InputField}
            placeholder="Enter Your Password .."
            underlineColorAndroid="transparent"
            secureTextEntry={showPassword ? false : true}
            value={password}
            onChangeText={val => setPassword(val)}
          />
          {showPassword ? (
            <EyeIcon onPress={changePasswordVisiblity} color={primaryColor} />
          ) : (
            <EyeSlashIcon
              onPress={changePasswordVisiblity}
              color={primaryColor}
            />
          )}
        </View>
      </View>
      <View style={GlobalStyles.ForgotPasswordConatiner}>
        <Text
          onPress={goToForgetPassword}
          style={GlobalStyles.ForgotPasswordTitle}>
          Forgot Password ?
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={onLoginPress} style={GlobalStyles.Button}>
          <Text style={GlobalStyles.ButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={GlobalStyles.LineContainer}>
        <View style={GlobalStyles.Line} />
        <View>
          <Text style={{color: '#4E4E4E', fontSize: 14}}>Or Login With</Text>
        </View>
        <View style={GlobalStyles.Line} />
      </View>

      <View style={GlobalStyles.SocialLoginContainer}>
        <TouchableOpacity style={GlobalStyles.SocialLoginBox}>
          <Facebook />
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.SocialLoginBox}>
          <GmailIcon />
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.SocialLoginBox}>
          <AppleIcon />
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16}}>Don't have and account??</Text>
        <Text
          onPress={goToSignUp}
          style={{color: primaryColor, fontWeight: '500', fontSize: 16}}>
          Register
        </Text>
      </View>
    </SafeAreaView>
  );
}
