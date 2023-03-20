import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, type}) => {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={number}
        decimalSeparator="."
        displayType="text"
        renderText={value => <Text>{value}</Text>}
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumericFormat
      key={number}
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
