import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import AppNavigator from 'navigators';
import store from 'reduxs/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
