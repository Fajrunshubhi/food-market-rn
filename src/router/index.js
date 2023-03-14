import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Home,
  Profile,
  Order,
  SignIn,
  SignUp,
  SignUpAddress,
  SplashScreen,
  SuccessSignUp,
  FoodDetail,
  OrderSummary,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const HomeStack = createNativeStackNavigator();

// const HomeApp = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         options={{headerShown: false}}
//         name="Home"
//         component={Home}
//       />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </HomeStack.Navigator>
//   );
// };
// function SettingsScreen() {
//   return <View />;
// }

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeApp"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
