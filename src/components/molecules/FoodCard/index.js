import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FoodDummy1, IcStarOn, IcStarOff} from '../../../assets';

const FoodCard = () => {
  return (
    <View style={styles.container}>
      <Image source={FoodDummy1} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.startContainer}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOff />
          </View>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
  content: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  startContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});