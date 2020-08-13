import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import UserDetailScreen from 'screens/UserDetailScreen';

const AppStack = createStackNavigator();
const AppNavigator = () => (
  <AppStack.Navigator initialRouteName="Home">
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="UserDetail"
      component={UserDetailScreen}
      options={{ title: '' }}
    />
  </AppStack.Navigator>
);

export default AppNavigator;
