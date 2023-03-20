import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, HomeProfile, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.food);
  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView
          style={styles.ScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.foddCardContainer}>
            {food.map(itemFood => {
              return (
                <FoodCard
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{uri: itemFood.picturePath}}
                  rating={itemFood.rate}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foddCardContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingStart: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
