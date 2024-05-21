import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
  import {
    CalendarIcon,
    PencilIcon,
    CheckIcon,
    ClockIcon,
    MapPinIcon,
    CurrencyDollarIcon,
    TruckIcon,
    BookOpenIcon,
    LockClosedIcon,
  } from "react-native-heroicons/solid";
  import { useNavigation } from "@react-navigation/native";
import MoveBackButton from "../components/MoveBackButton";
  
  const History = ({navigation} :any) => {
    // const navigation = useNavigation();
    const goBack = () => {
      navigation.navigate("Home");
    };
  
    return (
      <SafeAreaView style={{ paddingHorizontal: 5, backgroundColor: "#fafafa", height:'100%'  }}>
        {/* ----Top Return Icon---- */}
        {/* <TouchableOpacity style={styles.TopBack} onPress={goBack}>
          <ArrowSmallLeftIcon color="black" size={20} />
        </TouchableOpacity> */}
        <View style={{marginHorizontal:20}}>

      
<MoveBackButton  navigation={navigation} margin={true} />
</View>
  
        <Text style={styles.MainHeading}>My Rides And Order</Text>
        <Text style={styles.MiniHeading}>Saturday, December 23, 2023</Text>
  
        {/* ----Car Container 1---- */}
        <View style={styles.BusContainer}>
          <View style={styles.LeftContent}>
            <Text style={[styles.HeadingText, { color: "black", fontSize: 15 }]}>
              Daytime ride at 17:01
            </Text>
            <Text style={{ color: "black" }}>
              Canceled
            </Text>
          </View>
          <View style={styles.RightContent}>
            <Image
              source={require("../assets/images/whitecarimage.png")}
              style={{ width: 80, height: 70 }}
            />
          </View>
        </View>
  
         {/* ----Car Container 2---- */}
         <View style={styles.BusContainer}>
          <View style={styles.LeftContent}>
            <Text style={[styles.HeadingText, { color: "black", fontSize: 15 }]}>
              Daytime ride at 17:01
            </Text>
            <Text style={{ color: "black" }}>
              Canceled
            </Text>
          </View>
          <View style={styles.RightContent}>
            <Image
              source={require("../assets/images/whitecarimage.png")}
              style={{ width: 80, height: 70 }}
            />
          </View>
        </View>
  
        <Text style={styles.MiniHeading}>Moonday, October 23, 2022</Text>
  
        
        {/* ----Car Container 3---- */}
        <View style={styles.BusContainer}>
          <View style={styles.LeftContent}>
            <Text style={[styles.HeadingText, { color: "black", fontSize: 15 }]}>
              Daytime ride at 17:01
            </Text>
            <Text style={{ color: "black" }}>
              Canceled
            </Text>
          </View>
          <View style={styles.RightContent}>
            <Image
              source={require("../assets/images/whitecarimage.png")}
              style={{ width: 80, height: 70 }}
            />
          </View>
        </View>
  
         {/* ----Car Container 4---- */}
         <View style={styles.BusContainer}>
          <View style={styles.LeftContent}>
            <Text style={[styles.HeadingText, { color: "black", fontSize: 15 }]}>
              Daytime ride at 17:01
            </Text>
            <Text style={{ color: "black" }}>
              Canceled
            </Text>
          </View>
          <View style={styles.RightContent}>
            <Image
              source={require("../assets/images/whitecarimage.png")}
              style={{ width: 80, height: 70 }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default History;
  
  const styles = StyleSheet.create({
    MiniHeading: {
      color: "black",
      fontSize: 15,
      fontWeight: "300",
      marginHorizontal: 15,
      marginTop: 10,
      marginBottom: 20,
    },
    MainHeading: {
      color: "black",
      fontSize: 20,
      fontWeight: "500",
      marginHorizontal: 15,
      marginTop: 20,
    },
    TopBack: {
      marginTop: 25,
      alignItems: "center",
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      width: "13%",
      height: 40,
      marginHorizontal: 15,
    },
    HeadingText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    BusContainer: {
      backgroundColor: '#ffffff',
      height: 90, 
      borderRadius: 10, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      paddingHorizontal: 20, 
      marginVertical: 10,
      marginHorizontal: 15,
      marginTop: 0,
    },
    LeftContent: {
      flex: 1,
    },
    RightContent: {
      marginLeft: 20, 
    },
  });