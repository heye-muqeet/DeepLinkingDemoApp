import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Referal from '../screens/Referal';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ReferalScreen'}
    >
      {/* ************REFERAL_SCREEN************** */}
      <Stack.Screen
        name={'ReferalScreen'}
        component={Referal}
      />

      {/* ************WELCOME_SCREEN************** */}
      <Stack.Screen
        name={'WelcomeScreen'}
        component={Welcome}
      />

    </Stack.Navigator>
  );
};

export default AppContainer;