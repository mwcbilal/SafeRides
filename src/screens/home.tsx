import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Bars2Icon, Bars4Icon} from 'react-native-heroicons/solid';
import {
  InboxArrowDownIcon,
  UserIcon,
  CalendarIcon,
  ArrowUturnDownIcon,
  ClockIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';
import {MapIcon} from 'react-native-heroicons/outline';
import {grayolor, primaryColor} from '../GlobalConfig/Colors';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';
import {ShortStyles} from '../GlobalConfig/ShortStykes';

export default function HomeScreen({navigation}: any) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (service: React.SetStateAction<string>) => {
    setSelectedService(service);
  };

  const finishBooking = () => {
    navigation.navigate('RideDetails');
    // navigation.navigate("SelectVehicle")
  };
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
console.log("NAVVV",navigation)
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={{width: screenWidth * 0.8}}>
        {/* ---Top Three---- */}
        <View style={styles.TopButtonContainer}>
          {/* @ts-ignore */}
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            
              <Bars4Icon color={'black'} />
          </TouchableOpacity>
          <View>
            <Text>Have a cool day!</Text>
            <Text style={styles.HeadingText}> Steven Smith</Text>
          </View>
          <View>
            <Text>30</Text>
            <Text style={styles.HeadingText}>Apr</Text>
          </View>
        </View>

        {/* ----Bus Container---- */}
        <View style={styles.BusContainer}>
          <View style={styles.LeftContent}>
            <Text
              style={[
                styles.HeadingText,
                {color: 'white', fontSize: 18, marginBottom: 3},
              ]}>
              Safe <Text style={{color: 'black'}}>Rides</Text>
              .org
            </Text>
            <Text style={{color: 'white', fontSize: 12}}>
              Experience a quick, easy and convenient transportation in a luxury
              vehicle
            </Text>
          </View>
          <View style={styles.RightContent}>
            <Image
              source={require('../assets/images/home-car.png')}
              style={{width: 120, height: 80}}
            />
          </View>
        </View>

        {/* ----Choose Service---- */}
        <View style={styles.ServiceContainer}>
          <Text style={styles.ServiceHeading}>Choose Service</Text>
          <View style={styles.MiniContainer}>
            <TouchableOpacity
              style={[
                styles.Options,
                selectedService === 'Round Trip' && styles.SelectedService,
              ]}
              onPress={() => handleServiceClick('Round Trip')}>
              <ArrowUturnDownIcon color="#00BFF3" />
              <Text>Round Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.Options,
                selectedService === 'One Way' && styles.SelectedService,
              ]}
              onPress={() => handleServiceClick('One Way')}>
              <InboxArrowDownIcon color="#00BFF3" />
              <Text>One Way</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.Options,
                selectedService === 'Hourly' && styles.SelectedService,
              ]}
              onPress={() => handleServiceClick('Hourly')}>
              <ClockIcon color="#00BFF3" />
              <Text>Hourly</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ----Inputs---- */}
        <View style={styles.InputContainer}>
          <View style={styles.InputWrapper}>
            <MapPinIcon color="#00BFF3" />
            <TextInput
              style={styles.TextInput}
              placeholder="Pickup Location"
              value={pickupLocation}
              onChangeText={setPickupLocation}
            />
          </View>
          <View style={styles.InputWrapper}>
            <MapPinIcon color="#00BFF3" />
            <TextInput
              style={styles.TextInput}
              placeholder="Drop-off Location"
              value={dropOffLocation}
              onChangeText={setDropOffLocation}
            />
          </View>
          <View style={styles.InputWrapper}>
            <UserIcon color="#00BFF3" />
            <TextInput
              style={styles.TextInput}
              placeholder="Number of Passengers"
              value={passengerCount}
              onChangeText={setPassengerCount}
            />
          </View>
          <View style={styles.InputWrapper}>
            <CalendarIcon color="#00BFF3" />
            <TextInput
              style={styles.TextInput}
              placeholder="Date"
              value={date}
              onChangeText={setDate}
            />
          </View>
          <View style={styles.InputWrapper}>
            <CalendarIcon color="#00BFF3" />
            <TextInput
              style={styles.TextInput}
              placeholder="Time"
              value={time}
              onChangeText={setTime}
            />
          </View>
        </View>
        {/* Finish Booking button */}
        <TouchableOpacity
          onPress={finishBooking}
          style={styles.finishBookingButton}>
          <Text style={styles.finishBookingButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TopButtonContainer: {
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 12,
    marginVertical: 10,
    marginTop: 20,
  },
  HamBurger: {
    width: 39,
    // borderRadius: 50,
  },
  MidContainer: {},
  HeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  BusContainer: {
    backgroundColor: '#00BFF3',
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 10,
    marginTop: 20,
  },
  LeftContent: {
    flex: 1,
  },
  RightContent: {
    marginLeft: 20,
  },
  ServiceContainer: {
    marginTop: 20,
  },
  ServiceHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  MiniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Options: {
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    width: '30%',
    height: 70,
  },
  SelectedService: {
    borderColor: '#00BFF3',
    borderWidth: 2,
  },
  InputContainer: {
    marginTop: 20,
  },
  InputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    paddingTop: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 5,
    },
  },
  TextInput: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  finishBookingButton: {
    backgroundColor: primaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  finishBookingButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
