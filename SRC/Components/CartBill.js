import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Bill = () => {
  return (
    <View style={styles.container}>
      <View style={styles.billHeadings}>
        <Text style={styles.titleTxt}>Subtotal:</Text>
        <Text style={styles.priceTxt}>$30.00</Text>
      </View>
      <View style={styles.billHeadings}>
        <Text style={styles.titleTxt}>Fee Delivery:</Text>
        <Text style={styles.priceTxt}>$30.00</Text>
      </View>
      <View style={styles.billHeadings}>
        <Text style={styles.titleTxt}>Discount:</Text>
        <Text style={styles.priceTxt}>$30.00</Text>
      </View>
      <View style={[styles.billHeadings, styles.total]}>
        <Text style={styles.titleTxt}>Total: </Text>
        <Text style={styles.priceTxt}>$30.00</Text>
      </View>
    </View>
  )
}

export default Bill

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
  },
  billHeadings: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: RFValue(4),
  },
  titleTxt: {
    color: 'grey',
    fontWeight: '500',
  },
  priceTxt: {
    color: 'black',
    fontWeight: '600',
  },
  total: {
    marginTop: RFValue(60),
  }
})
