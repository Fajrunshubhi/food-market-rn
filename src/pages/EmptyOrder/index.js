import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlEmptyOrder} from '../../assets';
import {Gap, Button} from '../../components';

const EmptyOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subTitle}>NSeems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          buttonName="Finds Foods"
          color="#FFC700"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
