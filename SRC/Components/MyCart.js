import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';
import MyCartHeader from './HeaderMyCart';

const MyCart = () => {
  const cartState = useSelector(state => state.cart);
  return (
    <View style={styles.container}>
      <MyCartHeader />
      {cartState.length === 0 ? (
        <View style={styles.emptyPage}>
          <Text style={styles.emptyPageTxt}>
            Empty Cart
          </Text>
        </View>
      ) : (
        <View style={styles.cartItemsContainer}>
          <CartItems />
        </View>
      )}
    </View>
  )
};

export default MyCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: RFPercentage(12),
    paddingTop: RFPercentage(2),
  },
  emptyPage: {
    flex: 1,
    alignItems: 'center',
    marginTop: RFPercentage(42),
  },
  emptyPageTxt: {
    fontSize: RFPercentage(3.5),
    fontWeight: '600',
    color: 'lightgrey',
  },
  cartItemsContainer: {
    flex: 1,
    marginTop: RFPercentage(1),
  },
})
