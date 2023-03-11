import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcMin, IcPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>10</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
    marginHorizontal: 10,
  },
});
