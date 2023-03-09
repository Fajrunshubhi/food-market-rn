import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1} from '../../../assets';
import Rating from '../Rating';

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

const NewTaste = () => (
  <View style={styles.FirstRoute}>
    <View style={styles.tasteContainer}>
      <View>
        <Image source={FoodDummy1} />
      </View>
      <View>
        <Text> Soup Bumil</Text>
        <Text> IDR 289.000</Text>
      </View>
      <View>
        <Rating />
      </View>
    </View>
  </View>
);

const SecondRoute = () => <View style={styles.SecondRoute} />;

const renderScene = SceneMap({
  1: NewTaste,
  2: SecondRoute,
  3: NewTaste,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

const styles = StyleSheet.create({
  indicatorStyle: {backgroundColor: '#020202', height: 3, marginStart: 20},
  tabHeader: {backgroundColor: 'white', paddingStart: 20},
  tabStyle: {width: 'auto'},
  FirstRoute: {flex: 1, backgroundColor: '#ff4081'},
  SecondRoute: {flex: 1, backgroundColor: '#673ab7'},
  tasteContainer: {
    flexDirection: 'row',
  },
});
