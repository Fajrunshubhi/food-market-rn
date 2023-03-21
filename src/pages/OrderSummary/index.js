import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ItemListFood, ItemValue, Button, Gap} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;

  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack
          onPress={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            type="order-summary"
            name={item.name}
            image={{uri: item.picturePath}}
            price={item.price}
            items={transaction.totalItem}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={item.name}
            value={transaction.totalPrice}
            type="currency"
          />
          <ItemValue
            label="Driver"
            value={transaction.driver}
            type="currency"
          />
          <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
          <ItemValue
            label="Total Price"
            value={transaction.total}
            valueColor="#1ABC9C"
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To: </Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>
        <View style={styles.button}>
          <Button
            buttonName="Checkot Now"
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
        <Gap height={40} />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

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
