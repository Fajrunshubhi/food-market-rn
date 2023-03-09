import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import {profileDummy} from '../../assets';
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
      <View>
        <FoodCard />
      </View>
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
});
