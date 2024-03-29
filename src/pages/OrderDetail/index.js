import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ItemListFood, ItemValue, Button, Gap} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => {}}
        />

        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            type="order-summary"
            name="Sop Bumil"
            image={FoodDummy1}
            price="289.000"
            items={5}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To: </Text>
          <ItemValue label="Name" value="Fajrun Shubhi" />
          <ItemValue label="Phone No." value="081223969871" />
          <ItemValue label="Address" value="Cirebon, Jawa Barat" />
          <ItemValue label="House No." value="No 1" />
          <ItemValue label="City" value="Cirebon" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status: </Text>
          <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
        </View>
        <View style={styles.button}>
          <Button
            buttonName="Cancel My Order"
            color="#D9435E"
            textColor="white"
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
        <Gap height={40} />
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
