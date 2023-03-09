import React from 'react';
import {Text, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="go to setting"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({});
