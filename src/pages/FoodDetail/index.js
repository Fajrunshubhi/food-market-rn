import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const foodDetail = route.params.item;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});
  const onCounterChange = value => {
    setTotalItem(value);
  };

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const onOrderData = () => {
    const driver = 25000;
    const totalPrice = totalItem * foodDetail.price;
    const tax = (10 / 100) * totalPrice;
    const total = driver + totalPrice + tax;

    const data = {
      item: {
        name: foodDetail.name,
        price: foodDetail.price,
        picturePath: foodDetail.picturePath,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile,
    };
    console.log('data for checkout: ', data);
    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground
        source={{uri: foodDetail.picturePath}}
        style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{foodDetail.name}</Text>
              <Rating number={foodDetail.rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{foodDetail.description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{foodDetail.ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.labelPrice}>Total Price: </Text>
            {/* <Text style={styles.price}>{foodDetail.price * totalItem}</Text> */}
            <Number
              style={styles.price}
              number={foodDetail.price * totalItem}
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonName="Order Now"
              color="#FFC700"
              textColor="black"
              onPress={onOrderData}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {
    height: 330,
    paddingTop: 25,
    paddingStart: 20,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {flex: 1},
  content: {
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20,
    marginTop: -40,
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 160,
  },
  labelPrice: {
    fontSize: 12,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
    fontWeight: 'bold',
  },
});
