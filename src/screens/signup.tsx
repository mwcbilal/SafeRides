import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from 'react-native-heroicons/solid';
import Facebook from '../components/Icons/Facebook';
import GmailIcon from '../components/Icons/Gmail';
import AppleIcon from '../components/Icons/Apple';
import {primaryColor} from '../GlobalConfig/Colors';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';

export default function SignupScreen({navigation}: any) {
  const [showPassword, setShowPasswrd] = useState(false);
  const [showConfirmPassword, setShowConfirmPasswrd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const changeConfirmPasswordVisiblity = () => {
    setShowConfirmPasswrd(!showConfirmPassword);
  };
  const changePasswordVisiblity = () => {
    setShowPasswrd(!showPassword);
  };
  const onLoginPress = () => {
    console.log(email, password);
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={{marginBottom: 30}}>
        <Image
          source={require('../assets/images/logo1.png')}
          style={{alignSelf: 'center', marginTop: 100}}
        />
        <View style={GlobalStyles.HeadingContainer}>
          <Text style={GlobalStyles.Heading}>Sign Up</Text>
          <Text style={GlobalStyles.Paragraph}>
            Enter your Personal Information
          </Text>
        </View>
        <View style={GlobalStyles.LabelAndFieldConatiner}>
          <Text style={GlobalStyles.InputLabel}>User Name</Text>
          <View style={GlobalStyles.InputFieldConatiner}>
            <UserIcon color={primaryColor} />
            <TextInput
              textContentType="username"
              style={GlobalStyles.InputField}
              placeholder="Enter Your Name .."
              underlineColorAndroid="transparent"
            />
          </View>
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
            />
          </View>
        </View>
        <View style={GlobalStyles.LabelAndFieldConatiner}>
          <Text style={GlobalStyles.InputLabel}>Mobile Number</Text>
          <View style={GlobalStyles.InputFieldConatiner}>
            <PhoneIcon color={primaryColor} />
            <TextInput
              style={GlobalStyles.InputField}
              placeholder="Enter Your Mobile Number .."
              underlineColorAndroid="transparent"
              keyboardType="phone-pad"
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
        <View style={GlobalStyles.LabelAndFieldConatiner}>
          <Text style={GlobalStyles.InputLabel}>Confirm Password</Text>
          <View style={GlobalStyles.InputFieldConatiner}>
            <LockClosedIcon color={primaryColor} />
            <TextInput
              textContentType="password"
              style={GlobalStyles.InputField}
              placeholder="Enter Your Password .."
              underlineColorAndroid="transparent"
              secureTextEntry={showConfirmPassword ? false : true}
            />
            {showConfirmPassword ? (
              <EyeIcon
                onPress={changeConfirmPasswordVisiblity}
                color={primaryColor}
              />
            ) : (
              <EyeSlashIcon
                onPress={changeConfirmPasswordVisiblity}
                color={primaryColor}
              />
            )}
          </View>
        </View>

        <View>
          <TouchableOpacity style={GlobalStyles.Button}>
            <Text style={GlobalStyles.ButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.LineContainer}>
          <View style={GlobalStyles.Line} />
          <View>
            <Text style={{color: '#4E4E4E', fontSize: 14}}>Or Signup With</Text>
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
          }}>
          <Text style={{fontSize: 16}}>Do you have an account??</Text>
          <Text
            onPress={goToLogin}
            style={{color: primaryColor, fontWeight: '500', fontSize: 16}}>
            Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
