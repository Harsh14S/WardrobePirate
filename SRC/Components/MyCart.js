import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';

const MyCart = () => {
  const cartState = useSelector(state => state.cart);
  return cartState.length === 0 ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: RFValue(20), fontWeight: '600', color: 'lightgrey' }}>
        Empty Cart
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <CartItems />
    </View>
  )

};

export default MyCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: RFValue(90),
  },
})
