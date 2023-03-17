import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components';
import {IlSuccessOrder} from '../../assets';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          buttonName="Order Other Foods"
          color="#FFC700"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          buttonName="View My Order"
          color="#8D92A3"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginTop: 30,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    marginTop: 6,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
    marginTop: 12,
  },
});
