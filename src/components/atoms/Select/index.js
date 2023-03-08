import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = props => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.input}>
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javascript" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 6,
    paddingVertical: 0,
    paddingHorizontal: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
  },
});
