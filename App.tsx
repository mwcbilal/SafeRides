import 'react-native-gesture-handler';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MyStack } from './src/Navigators/StackNavigators';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  )
    ;
}

export default App;
