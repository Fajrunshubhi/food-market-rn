import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.FirstRoute}>
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
          rating={3}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  // const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.SecondRoute}>
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy3}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy1}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy5}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy2}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy4}
          rating={3}
        />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  // const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.ThirdRoute}>
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy5}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy3}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy2}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy1}
          rating={3}
        />
        <ItemListFood
          type="product"
          name="Sop Bumil"
          price="289.000"
          image={FoodDummy4}
          rating={3}
        />
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

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
  FirstRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
  SecondRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
  ThirdRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
});
