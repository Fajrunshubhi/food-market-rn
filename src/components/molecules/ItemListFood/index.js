import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';

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
              <Text style={styles.textPrice}> IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <Text style={styles.textPrice}> IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <Text style={styles.textPrice}>
                {items} items.IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-order':
        return (
          <>
            <View style={styles.textFoodContainer}>
              <Text style={styles.textFood}> {name}</Text>
              <Text style={styles.textPrice}>
                {items} items.IDR {price}
              </Text>
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
              <Text style={styles.textPrice}> IDR {price}</Text>
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
});
