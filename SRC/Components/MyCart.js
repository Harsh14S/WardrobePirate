import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import CartItems from './CartItems';

const MyCart = () => {
  return (
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
