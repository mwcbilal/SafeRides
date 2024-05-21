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
import {EnvelopeIcon} from 'react-native-heroicons/solid';
import MoveBackButton from '../components/MoveBackButton';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';
import {primaryColor} from '../GlobalConfig/Colors';

export default function ForgetPasswordScreen({navigation}: any) {
  const [email, setEmail] = useState('');

  const onSendCodePress = () => {
    console.group(email);
    navigation.navigate('OTP');
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <MoveBackButton navigation={navigation} />
      <Image
        source={require('../assets/images/logo1.png')}
        style={{alignSelf: 'center'}}
      />
      <View style={GlobalStyles.HeadingContainer}>
        <Text style={GlobalStyles.Heading}>Forgot Password</Text>
        <Text style={GlobalStyles.Paragraph}>
          Please enter the email address or mobile number linked with your
          account.
        </Text>
      </View>
      <View style={GlobalStyles.LabelAndFieldConatiner}>
        <Text style={GlobalStyles.InputLabel}>Email or Mobile Number</Text>
        <View style={GlobalStyles.InputFieldConatiner}>
          <EnvelopeIcon color={primaryColor} />
          <TextInput
            style={GlobalStyles.InputField}
            placeholder="Enter Your Email .."
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={onSendCodePress} style={GlobalStyles.Button}>
          <Text style={GlobalStyles.ButtonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
