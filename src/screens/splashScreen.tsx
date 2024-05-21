import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ImageBackground} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default function SplashScreen({navigation}: any) {
  const goToScreen = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/splash-bg.png')}
        style={styles.backgroundImage}>
        {/* <Image resizeMode="contain" style={styles.logo} source={require('./assets/splash-image.png')} /> */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={goToScreen}>
            <Text style={styles.head1}>Quick, Easy And Convenient</Text>
          </TouchableOpacity>

          <Text style={styles.paragraph}>
            Save on Party Bus, Limo and Luxury Van Rides
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding: 8,
  },
  bottomContainer: {
    paddingTop: 24,
    height: screenHeight * 0.25,
    bottom: 0,
    // marginTop: -25,
    position: 'absolute',
    backgroundColor: 'white',
    width: screenWidth,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  paragraph: {
    marginTop: 10,
    fontSize: 14,
    color: '#4E4E4E',
    textAlign: 'center',
  },
  head1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: screenWidth * 0.75,
    height: screenHeight * 0.55,
  },
});
