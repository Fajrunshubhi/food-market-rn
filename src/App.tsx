import React from 'react';
import {SignIn} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplachScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;
