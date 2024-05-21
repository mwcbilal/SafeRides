import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  ArrowSmallLeftIcon,
  ArrowDownCircleIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {ArrowSmallDownIcon} from 'react-native-heroicons/outline';
import MoveBackButton from '../components/MoveBackButton';
import GlobalStyles from '../GlobalConfig/GlobalStylesheet';

const AboutUs = ({navigation} : any) => {
  
  const goBack = () => {
    navigation.goBack();
  };
  const [container1Open, setContainer1Open] = useState(true);
  const [container2Open, setContainer2Open] = useState(false);
  const [container3Open, setContainer3Open] = useState(false);

  const toggleContainer1 = () => {
    setContainer1Open(!container1Open);
  };

  const toggleContainer2 = () => {
    setContainer2Open(!container2Open);
  };

  const toggleContainer3 = () => {
    setContainer3Open(!container3Open);
  };

  return (
    <SafeAreaView
      style={GlobalStyles.container}>
      <ScrollView>
        {/* ----Top Return Icon---- */}
        <View style={{marginHorizontal:20}}>

      
        <MoveBackButton navigation={navigation} margin={true} />
        </View>
        {/* ----image container---- */}
        <View style={styles.CenterImage}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/logo1.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.HeadingText}>Version 4.185.0 released</Text>
        <Text style={styles.HeadingText}>22.04.2024 </Text>
        <Text style={styles.HeadingText}>build 124567 </Text>

        {/* Container 1 */}
        <TouchableOpacity
          style={styles.containerButton}
          onPress={toggleContainer1}>
          <Text style={styles.containerText}>About us</Text>
          <ChevronDownIcon color="black" size={20} />
        </TouchableOpacity>
        {container1Open && (
          <View style={styles.additionalText}>
            <Text>
              As we all know, a paragraph is a group of sentences that are
              connected and make absolute sense. While writing a long essay or
              letter, we break them into paragraphs for better understanding and
              to make a well-structured writing piece. Paragraph writing on any
              topic is not only about expressing your thoughts on the given
              topic, but it is also about framing ideas about.
            </Text>
          </View>
        )}

        {/* Container 2 */}
        <TouchableOpacity
          style={styles.containerButton}
          onPress={toggleContainer2}>
          <Text style={styles.containerText}>License agreement</Text>
          <ChevronDownIcon color="black" size={20} />
        </TouchableOpacity>
        {container2Open && (
          <View style={styles.additionalText}>
            <Text>
              As we all know, a paragraph is a group of sentences that are
              connected and make absolute sense. While writing a long essay or
              letter, we break them into paragraphs for better understanding and
              to make a well-structured writing piece. Paragraph writing on any
              topic is not only about expressing your thoughts on the given
              topic, but it is also about framing ideas about.
            </Text>
          </View>
        )}

        {/* Container 3 */}
        <TouchableOpacity
          style={styles.containerButton}
          onPress={toggleContainer3}>
          <Text style={styles.containerText}>Privacy Policy</Text>
          <ChevronDownIcon color="black" size={20} />
        </TouchableOpacity>
        {container3Open && (
          <View style={styles.additionalText}>
            <Text>
              As we all know, a paragraph is a group of sentences that are
              connected and make absolute sense. While writing a long essay or
              letter, we break them into paragraphs for better understanding and
              to make a well-structured writing piece. Paragraph writing on any
              topic is not only about expressing your thoughts on the given
              topic, but it is also about framing ideas about.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
const styles = StyleSheet.create({
  TopBack: {
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    width: '13%',
    height: 40,
    marginHorizontal: 15,
  },
  TopButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginTop: 20,
    marginHorizontal: 15,
  },
  HeadingText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 140,
  },

  image: {
    width: 170,
    height: 140,
  },
  CenterImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginTop: 15,
  },
  containerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalText: {
    padding: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginHorizontal: 15,
  },
});
