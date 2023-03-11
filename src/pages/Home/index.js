import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../assets';
import {FoodCard, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView
          style={styles.ScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.foddCardContainer}>
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy5} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy4} />
            <FoodCard image={FoodDummy2} />
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
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#8D92A3',
  },
  profile: {
    fontSize: 50,
    height: 50,
    borderRadius: 8,
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
