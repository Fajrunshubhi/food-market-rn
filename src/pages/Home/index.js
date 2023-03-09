import React from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {
  FoodDummy1,
  profileDummy,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../assets';
import {FoodCard} from '../../components';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={profileDummy} style={styles.profile} />
      </View>
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
  );
};

export default Home;

const styles = StyleSheet.create({
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
    paddingVertical: 24,
    paddingStart: 24,
  },
  ScrollView: {},
});
