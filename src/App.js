import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.global);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#FFC700" />
      <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
        {isLoading && <Loading />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
