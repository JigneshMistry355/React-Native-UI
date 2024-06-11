// import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options = {{headerShown : false}}
        />

        <Stack.Screen
          name = "Login"
          component={LoginScreen}
          options = {{headerShown : false}}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;