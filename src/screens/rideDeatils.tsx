import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowSmallLeftIcon} from 'react-native-heroicons/outline';
import {
  CalendarIcon,
  PencilIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from 'react-native-heroicons/solid';
import ModalSelector from 'react-native-modal-selector';
import MoveBackButton from '../components/MoveBackButton';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';

export default function RideDetails({navigation}:any) {
  const [dropOffLocation, setDropOffLocation] = useState('To ABC Location...');
  const [money, setMoney] = useState('10 USD');
  const [date, setDate] = useState('01/05/2024');
  const [time, setTime] = useState('03:30 PM');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [pickupLocation, setPickupLocation] = useState('To ABC Location...');
  const [isAgree, setIsAgree] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState('One Way');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    'Payment Method By Card',
  );
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={{width:screenWidth*0.8}}>
        {/* ----Top Return Icon---- */}
        <View >

      
<MoveBackButton navigation={navigation} margin={true} />
</View>

        {/* ---Top Three---- */}
        <View style={styles.TopButtonContainer}>
          <Text style={styles.HeadingText}>Ride Details</Text>
          {!isEdit && (
            <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
              <Text style={styles.HeadingBlueText}>Edit Details</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ----Inputs---- */}
        <View style={styles.InputContainer}>
          {isEdit ? (
            <ModalSelector
              data={[
                {key: 'One Way', label: 'One Way'},
                {key: 'Round Trip', label: 'Round Trip'},
                {key: 'Hourly', label: 'Hourly'},
              ]}
              initValue="Select Payment Method"
              onChange={option => setSelectedRideType(option.key)}>
              <View style={styles.InputWrapperEdit}>
                <TruckIcon color="#00BFF3" />
                <TextInput
                  style={[styles.TextInputEdit, {color: 'black'}]}
                  value={selectedRideType}
                  editable={false}
                />
              </View>
            </ModalSelector>
          ) : (
            <View style={styles.LineContainer}>
              <View style={styles.InnerContainer}>
                <TruckIcon color="#00BFF3" />
                <Text style={[styles.TextClass, {marginLeft: 10}]}>
                  Ride Type
                </Text>
              </View>
              <Text style={styles.TextClass}>One way</Text>
            </View>
          )}

          <View style={styles.LineContainer}>
            <View style={styles.InnerContainer}>
              <CalendarIcon color="#00BFF3" />
              <Text style={[styles.TextClass, {marginLeft: 10}]}>
                Pickup Date
              </Text>
            </View>
            {isEdit ? (
              <TextInput
                style={styles.TextInputEdit}
                value={date}
                onChangeText={setDate}
              />
            ) : (
              <Text style={styles.TextClass}>WED 30 MAY 2024</Text>
            )}
          </View>

          <View style={styles.LineContainer}>
            <View style={styles.InnerContainer}>
              <ClockIcon color="#00BFF3" />
              <Text style={[styles.TextClass, {marginLeft: 10}]}>
                Pickup Time
              </Text>
            </View>
            {isEdit ? (
              <TextInput
                style={styles.TextInputEdit}
                value={time}
                onChangeText={setTime}
              />
            ) : (
              <Text style={styles.TextClass}>06:30 AM</Text>
            )}
          </View>

          <View style={styles.LineContainer}>
            <View style={styles.InnerContainer}>
              <MapPinIcon color="#00BFF3" />
              <Text style={[styles.TextClass, {marginLeft: 10}]}>
                Pickup Location
              </Text>
            </View>
            {isEdit ? (
              <TextInput
                style={styles.TextInputEdit}
                value={pickupLocation}
                onChangeText={setPickupLocation}
              />
            ) : (
              <Text style={styles.TextClass}>ABC Location of XYZ</Text>
            )}
          </View>

          <View style={styles.LineContainer}>
            <View style={styles.InnerContainer}>
              <MapPinIcon color="#00BFF3" />
              <Text style={[styles.TextClass, {marginLeft: 10}]}>
                Dropoff Location
              </Text>
            </View>
            {isEdit ? (
              <TextInput
                style={styles.TextInputEdit}
                value={dropOffLocation}
                onChangeText={setDropOffLocation}
              />
            ) : (
              <Text style={styles.TextClass}>ABC Location of XYZ</Text>
            )}
          </View>

          <View style={styles.LineContainer}>
            <View style={styles.InnerContainer}>
              <CurrencyDollarIcon color="#00BFF3" />
              <Text style={[styles.TextClass, {marginLeft: 10}]}>
                Ride Cost
              </Text>
            </View>
            {isEdit ? (
              <TextInput
                style={styles.TextInputEdit}
                value={money}
                onChangeText={setMoney}
              />
            ) : (
              <Text style={styles.TextClass}>300 USD</Text>
            )}
          </View>

          
          {isEdit ? (
                <ModalSelector
                  data={[
                    {
                      key: 'Payment Method By Card',
                      label: 'Payment Method By Card',
                    },
                    {
                      key: 'Payment Methid By Cash',
                      label: 'Payment Methid By Cash',
                    },
                  ]}
                  initValue="Select Payment Method"
                  onChange={option => setSelectedPaymentMethod(option.key)}>
                  <View style={styles.InputWrapperEdit}>
                    <CalendarIcon color="#00BFF3" />
                    <TextInput
                      style={[styles.TextInputEdit, {color: 'black'}]}
                      value={selectedPaymentMethod}
                      editable={false}
                    />
                  </View>
                </ModalSelector>
              ) : (
                <View style={styles.LineContainer}>
                  <View style={styles.InnerContainer}>
                    <CalendarIcon color="#00BFF3" />
                    <Text style={[styles.TextClass, {marginLeft: 10}]}>
                      Payment Method To Driver
                    </Text>
                  </View>
                  <Text style={styles.TextClass}>By Card</Text>
                </View>
              )}

          {!isEdit && (
            <>
              <View style={styles.LineContainer}>
                <View style={styles.InnerContainer}>
                  <CurrencyDollarIcon color="#00BFF3" />
                  <Text style={[styles.TextClass, {marginLeft: 10}]}>
                    Fee/Donation
                  </Text>
                </View>
                <Text style={styles.TextClass}>10 USD</Text>
              </View>

              <View style={styles.LineContainer}>
                <View style={styles.InnerContainer}>
                  <CalendarIcon color="#00BFF3" />
                  <Text style={[styles.TextClass, {marginLeft: 10}]}>
                    Card Attached
                  </Text>
                </View>
                <Text style={styles.TextClass}>...457 Exp 05/27</Text>
              </View>
            </>
          )}

          <Text style={{marginVertical: 10}}>Additional Information</Text>

          <View style={styles.InputWrapper}>
            <PencilIcon color="#00BFF3" />
            <TextInput
              style={styles.TextInput}
              value={additionalInformation}
              onChangeText={setAdditionalInformation}
              editable={isEdit}
            />
          </View>
        </View>

        {/* Checkbox for agreeing with terms */}
        {!isEdit && (
          <View style={styles.CheckboxContainer}>
            <TouchableOpacity
              style={[
                styles.CheckboxButton,
                {backgroundColor: isAgree ? '#00BFF3' : 'white'},
              ]}
              onPress={() => setIsAgree(!isAgree)}>
              {isAgree && (
                <CheckIcon color={isAgree ? 'white' : '#00BFF3'} size={15} />
              )}
            </TouchableOpacity>
            <Text style={styles.CheckboxText}>Agree with terms of booking</Text>
          </View>
        )}

        {/* Finish Booking button */}
        {isEdit?<TouchableOpacity
          style={styles.finishBookingButton}
          onPress={() => setIsEdit(!isEdit)}>
          <Text style={styles.finishBookingButtonText}>
            Save Details
          </Text>
        </TouchableOpacity>:
        <TouchableOpacity
          style={styles.finishBookingButton}
          onPress={() => navigation.navigate("RequestDone")}>
          <Text style={styles.finishBookingButtonText}>
            Finish Booking
          </Text>
        </TouchableOpacity>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TextClass: {
    color: 'black',
    fontSize: 13,
  },
  
  TopButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 12,
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
    marginTop: 20,
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
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  TextInput: {
    flex: 1,
    alignItems: 'flex-start',
    height: 60,
    padding: 10,
  },
  TextInputEdit: {
    flex: 1,
    alignItems: 'flex-start',
    height: 40,
    padding: 10,
    marginLeft: 10,
  },
  CheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 10,
  },
  CheckboxButton: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#00BFF3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 5,
  },
  CheckboxText: {
    fontSize: 16,
    color: 'black',
  },
  finishBookingButton: {
    backgroundColor: '#00BFF3',
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  finishBookingButtonText: {
    color: 'white',
    fontSize: 18,
  },
  InputWrapperEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00BFF3',
  },
});
