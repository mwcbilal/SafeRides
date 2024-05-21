import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
  import { EnvelopeIcon, PhoneIcon } from "react-native-heroicons/solid";
  import { useNavigation } from "@react-navigation/native";
import MoveBackButton from "../components/MoveBackButton";
import GlobalStyles from "../GlobalConfig/GlobalStylesheet";
  
  export default function ProfileSettings({navigation} : any) {
    const [email, setEmail] = useState("Steven Smith");
    const [mobile, setMobile] = useState("+915678643");
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
    
    return (
      <SafeAreaView
        style={GlobalStyles.container}
      >
        <ScrollView  style={{width:screenWidth*0.8}}>
          {/* ----Top Return Icon---- */}
          <View >

      
<MoveBackButton navigation={navigation} margin={true} />
</View>
  
          {/* ----image container---- */}
          <View style={styles.CenterImage}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/images/camera.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
  
          <Text style={styles.HeadingText}>Steven Smith</Text>
  
          {/* ----Inputs---- */}
          <View style={styles.InputContainer}>
            <Text style={styles.Labels}>Email</Text>
            <View style={styles.InputWrapperEdit}>
              <EnvelopeIcon color="#00BFF3" size={17} />
              <TextInput
                style={styles.TextInputEdit}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <Text style={styles.Labels}>Mobile Number</Text>
            <View style={styles.InputWrapperEdit}>
              <PhoneIcon color="#00BFF3" size={17} />
              <TextInput
                style={styles.TextInputEdit}
                value={mobile}
                onChangeText={setMobile}
              />
            </View>
          </View>
  
          {/* Finish Booking button */}
          <TouchableOpacity style={styles.finishBookingButton}>
            <Text style={styles.finishBookingButtonText}>Update</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    InputWrapperEdit: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      shadowColor: "gray",
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    TextInputEdit: {
      flex: 1,
      height: 40,
      padding: 10,
    },
    TextClass: {
      color: "black",
      fontSize: 13,
    },
  
    TopButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
      marginTop: 20,
    },
    HeadingText: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      marginBottom: 30,
    },
  
    InputContainer: {
      // paddingHorizontal: 20,
    },
    finishBookingButton: {
      backgroundColor: "#00BFF3",
      paddingVertical: 12,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 15,
      shadowColor: "gray",
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    finishBookingButtonText: {
      color: "white",
      fontSize: 18,
    },
  
    imageContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      marginBottom: "auto",
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: "#ededed",
    },
  
    image: {
      width: 80,
      height: 80,
    },
    Labels: {
      color: "black",
      fontSize: 12,
      paddingLeft: 3,
      marginBottom: 5,
    },
    CenterImage: {
      alignItems: "center",
    },
  });