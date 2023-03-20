import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

const NewTaste = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {newTaste} = useSelector(state => state.food);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.FirstRoute}>
        {newTaste.map(item => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail')}
              rating={item.rate}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.food);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.SecondRoute}>
        {popular.map(item => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail')}
              rating={item.rate}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.food);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.ThirdRoute}>
        {recommended.map(item => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail')}
              rating={item.rate}
            />
          );
        })}
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
