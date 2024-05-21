import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    Dimensions
  } from 'react-native';
  import React, { useState } from 'react';
  import { ArrowSmallLeftIcon } from 'react-native-heroicons/outline';
  import {
    CalendarIcon,
    PencilIcon,
    CheckIcon,
    ClockIcon,
    MapPinIcon,
    CurrencyDollarIcon,
    TruckIcon,
    BookOpenIcon,
    LockClosedIcon
  } from 'react-native-heroicons/solid';
  import {useNavigation} from '@react-navigation/native';
import MoveBackButton from '../components/MoveBackButton';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  
  export default function PaymentMethods({navigation} :any) {
    const [nickName ,setNickName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [valid, setValid] = useState('');
    const [securityCode, setSecurityCode] = useState('2221-0057-4680-2089');
    
   
  
    return (
      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView  style={{width:screenWidth*0.8}}>
          {/* ----Top Return Icon---- */}
   

          <View >

      
<MoveBackButton navigation={navigation} margin={true} />
</View>
          {/* ----image container---- */}
          <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/cardimage.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
  
          {/* ----Inputs---- */}
          <View style={styles.InputContainer}>

<Text style={styles.Labels}>Nick Name</Text>
          <View style={styles.InputWrapperEdit}>
              <PencilIcon color="#00BFF3" size={17}/>
              <TextInput
                style={styles.TextInputEdit}
                value={nickName}
                onChangeText={setNickName}
                placeholder='Put nick name to this cardd'
              />
            </View>
            <Text style={styles.Labels}>Card number</Text>
            <View style={styles.InputWrapperEdit}>
              <BookOpenIcon color="#00BFF3" size={17} />
              <TextInput
                style={styles.TextInputEdit}
                placeholder='Card number heer'
                value={cardNumber}
                onChangeText={setCardNumber}
              />
            </View>
            <Text style={styles.Labels}>Card Holder Name</Text>
            <View style={styles.InputWrapperEdit}>
              <PencilIcon color="#00BFF3" size={17} />
              <TextInput
                style={styles.TextInputEdit}
                value={cardHolderName}
                onChangeText={setCardHolderName}
                placeholder='Put Holder name here'
              />
            </View>
            <Text style={styles.Labels}>Valid Thru</Text>
            <View style={styles.InputWrapperEdit}>
              <CalendarIcon color="#00BFF3" size={17} />
              <TextInput
                style={styles.TextInputEdit}
                placeholder='27/8'
                value={valid}
                onChangeText={setValid}
              />
            </View>

            <Text style={styles.Labels}>Security Code</Text>
            <View style={styles.InputWrapperEdit}>
              <LockClosedIcon color="#00BFF3"  size={17}/>
              <TextInput
              placeholder='000 '
                style={styles.TextInputEdit}
                value={securityCode}
                onChangeText={setSecurityCode}
              />
            </View>

          </View>
  
         
  
          {/* Finish Booking button */}
          <TouchableOpacity style={styles.finishBookingButton}>
            <Text style={styles.finishBookingButtonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    InputWrapperEdit: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      shadowColor: 'gray',
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 1,
      }
    },
    TextInputEdit: {
      flex: 1,
      height: 40,
      padding: 10
    },
    PickerStyle: {
      flex: 1,
      height: 40,
      color: 'black'
    },
    TextClass: {
      color: 'black',
      fontSize: 13,
    },
    
    TopButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
      marginTop: 20,
    },
    MidContainer: {},
    HeadingText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    HeadingBlueText: {
      color: '#00BFF3',
      fontSize: 15,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  
    InputContainer: {
    },
    LineContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#00BFF3',
      paddingBottom: 10,
      marginBottom: 20,
      marginTop: 10,
    },
    InnerContainer: {
      flexDirection: 'row',
    },
    InputWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 10,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      shadowColor: 'gray',
      shadowOpacity: 0.5,
    },
    TextInput: {
      flex: 1,
      alignItems: 'flex-start',
      height: 60,
      padding: 10,
    },
    finishBookingButton: {
        backgroundColor: '#00BFF3',
        paddingVertical: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15,
        shadowColor: 'gray',
        shadowOffset: {
          width:0,
          height: 2,
        }
      },
    finishBookingButtonText: {
      color: 'white',
      fontSize: 18,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: -30,
      },
      image: {
        width: screenWidth*0.8,
        height: 300,
      },
      Labels:{
        color: 'black',
        fontSize: 12,
        paddingLeft: 3,
        marginBottom: 5
      }
  });

  