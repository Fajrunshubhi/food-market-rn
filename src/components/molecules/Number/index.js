import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, type}) => {
  return (
    <NumericFormat
      value={number}
      thousandSeparator="."
      decimalSeparator=","
      displayType="text"
      prefix="IDR "
      renderText={value => <Text>{value}</Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
