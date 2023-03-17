import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#FFC700" />
      <NavigationContainer>
        <Provider store={store}>
          <Router />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
