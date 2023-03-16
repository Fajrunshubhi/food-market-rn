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
// import {Order} from '../../../pages';

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.FirstRoute}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="289.000"
          name="Avosalado "
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="289.000"
          name="Avosalado "
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="289.000"
          name="Avosalado "
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="289.000"
          name="Avosalado "
        />
        <ItemListFood
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="289.000"
          name="Avosalado "
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.SecondRoute}>
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-order"
          items={3}
          price="289.000"
          name="Avosalado "
          date="Jun 12, 14:00"
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-order"
          items={3}
          price="289.000"
          name="Avosalado "
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          image={FoodDummy5}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-order"
          items={3}
          price="289.000"
          name="Avosalado "
          date="Jun 12, 14:00"
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-order"
          items={3}
          price="289.000"
          name="Avosalado "
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-order"
          items={3}
          price="289.000"
          name="Avosalado "
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

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
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

export default OrderTabSection;

const styles = StyleSheet.create({
  indicatorStyle: {backgroundColor: '#020202', height: 3, marginStart: 20},
  tabHeader: {backgroundColor: 'white', paddingStart: 20},
  tabStyle: {width: 'auto'},
  FirstRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
  SecondRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
  ThirdRoute: {flex: 1, backgroundColor: 'white', paddingHorizontal: 24},
});
