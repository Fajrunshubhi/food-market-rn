import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import Number from '../Number';

const ItemListFood = ({
  rating,
  image,
  onPress,
  items,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <Number number={price} style={styles.textPrice} />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <Number number={price} style={styles.textPrice} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <View style={styles.row}>
                <Text style={styles.textPrice}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
          </>
        );
      case 'past-order':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <View style={styles.row}>
                <Text style={styles.textPrice}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <Number number={price} style={styles.textPrice} />
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.tasteContainer}>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} />
        </View>
        {renderContent()}
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
    marginStart: -5,
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
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
});
