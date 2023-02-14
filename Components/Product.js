import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Items = () => {
  return (
    <View style={styles.container}>
      <View style={styles.proContainer}>
        <View style={styles.productView}></View>
        <Text style={styles.txt}>Crew Neck Half Sleeve T-Shirt</Text>
        <View style={styles.btmContainer}>
          <Text style={styles.priceTag}> $20 </Text>
          <View style={styles.clrTiles}></View>
        </View>
      </View>
    </View>
  )
}

export default Items

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    height: RFValue(1000),
    borderRadius: RFValue(40),
  },
  proContainer: {
    width: RFValue(160),
  },
  productView: {
    margin: RFValue(2),
    backgroundColor: 'orange',
    borderRadius: RFValue(40),
    height: RFValue(180),
  },
  img: {
    height: RFValue(180),
    width: RFValue(160),
  },
  txt: {
    fontSize: RFValue(15),
  },
  btmContainer: {
    // backgroundColor: 'gold',
    marginTop: RFValue(8),
    width: RFValue(160),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  priceTag: {
    fontSize: RFValue(14),
  },
  clrTiles: {
    backgroundColor: 'black',
    width: RFValue(10),
    height: RFValue(10),
    marginRight: RFValue(5),
  }
})
