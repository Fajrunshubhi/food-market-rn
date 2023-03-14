import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const ItemListFood = ({rating, image, onPress, items}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.tasteContainer}>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} />
        </View>
        <View style={styles.textFoodContainer}>
          <Text style={styles.textFood}> Soup Bumil</Text>
          <Text style={styles.textPrice}> IDR 289.000</Text>
        </View>
        {items && !rating && <Text style={styles.items}>{items} items</Text>}
        <View>{rating && !items && <Rating />}</View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  tasteContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginTop: 5,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgContainer: {
    marginEnd: 12,
  },
  img: {width: 60, height: 60, borderRadius: 15},
  textFoodContainer: {
    flex: 1,
  },
  textFood: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  textPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
