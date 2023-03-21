import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IcMin, IcPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);
  const onCountPlus = () => {
    setValue(prevValue => prevValue + 1);
  };
  const onCountMin = () => {
    if (value > 1) {
      setValue(prevValue => prevValue - 1);
    }
  };
  onValueChange(value);
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={onCountMin}>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={onCountPlus}>
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
