import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'react-native';
import {
  CameraIcon,
  ClockIcon,
  Cog8ToothIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ShareIcon,
  StarIcon,
  WalletIcon,
} from 'react-native-heroicons/solid';
import {ShortStyles} from '../GlobalConfig/ShortStykes';
import HomeScreen from '../screens/home';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
      onPress={() => props.navigation.navigate('Profile')}
        style={[
          ShortStyles.marginVertical_5,
          ShortStyles.flex_row,
          {marginLeft: 30},
        ]}>
        <CameraIcon
          color={'black'}
          style={[ShortStyles.marginRight_3]}
          size={50}
        />
        <View>
          <Text
            style={[
              ShortStyles.fw_bold,
              ShortStyles.fs_3,
              ShortStyles.marginVertical_1,
            ]}>
            Steven Smith
          </Text>
          <View
            style={[
              // ShortStyles.text_gray,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <StarIcon color={'gray'} style={{marginRight: 5}} />
            <Text>5.0</Text>
          </View>
        </View>
      </TouchableOpacity>
      <DrawerItem
        label="Payment Methods"
        icon={({focused, color, size}: any) => (
          <WalletIcon color={'#00BFF3'} style={[ShortStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate('Payment')}
      />
      <DrawerItem
        label="Settings"
        icon={({focused, color, size}: any) => (
          <Cog8ToothIcon color={'#00BFF3'} style={[ShortStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem
        label="History"
        icon={({focused, color, size}: any) => (
          <ClockIcon color={'#00BFF3'} style={[ShortStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate('History')}
      />
      <DrawerItem
        label="About us"
        icon={({focused, color, size}: any) => (
          <InformationCircleIcon
            color={'#00BFF3'}
            style={[ShortStyles.marginLeft_5]}
          />
        )}
        onPress={() => props.navigation.navigate('AboutUs')}
      />
      <DrawerItem
        label="Share"
        icon={({focused, color, size}: any) => (
          <ShareIcon style={[ShortStyles.marginLeft_5]} color={'#00BFF3'} />
        )}
        onPress={() => props.navigation.navigate('Share')}
      />
      <DrawerItem
        label="Login"
        icon={({focused, color, size}: any) => (
          <ExclamationTriangleIcon
            style={[ShortStyles.marginLeft_5]}
            color={'#00BFF3'}
          />
        )}
        onPress={() => props.navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
