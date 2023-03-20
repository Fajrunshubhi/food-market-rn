import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Order} from '../../../pages';

const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };
  return (
    <ScrollView>
      <View style={styles.FirstRoute}>
        <ItemListMenu text="Edit Profile" />
        <ItemListMenu text="Home Address" />
        <ItemListMenu text="Security" />
        <ItemListMenu text="Payments" />
        <ItemListMenu text="SignOut" onPress={signOut} />
      </View>
    </ScrollView>
  );
};

const FoodMarket = () => {
  // const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.SecondRoute}>
        <ItemListMenu text="Rate App" />
        <ItemListMenu text="Help Center" />
        <ItemListMenu text="Privacy & Policy" />
        <ItemListMenu text="Terms & Conditions" />
      </View>
    </ScrollView>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabHeader}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused, color}) => (
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  indicatorStyle: {backgroundColor: '#020202', height: 3, marginStart: 20},
  tabHeader: {backgroundColor: 'white', paddingStart: 20},
  tabStyle: {width: 'auto'},
  FirstRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
  SecondRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
  ThirdRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
});
