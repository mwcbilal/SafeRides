import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowSmallLeftIcon} from 'react-native-heroicons/outline';
import MoveBackButton from '../components/MoveBackButton';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';

export default function RequestDone({navigation}: any) {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  return (
    <SafeAreaView style={GlobalStyles.container}>
      {/* ----Top Return Icon---- */}
      <View
        style={{
          width: screenWidth * 0.8,
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}>
        <MoveBackButton margin={true} navigation={navigation} />

        {/* Centered Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/request-done.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Booking request is done</Text>
        </View>

        {/* Bottom Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RideComplete')}
          style={styles.button}>
          <Text style={styles.buttonText}>See My Booking</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#00BFF3',
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
