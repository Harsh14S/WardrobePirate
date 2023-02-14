import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Items = () => {
  return (
    <View style={styles.container}>
      <View style={styles.proContainer}>
        <View style={styles.productView}>
          <Image
            source={require('../Components/ProjectData/Logo/Tshirt.jpg')}
            style={styles.img}
          />
        </View>
        <Text style={styles.txt}>Crew Neck Half Sleeve T-Shirt</Text>
        <View style={styles.btmContainer}>
          <Text style={styles.priceTag}> $20 </Text>
          <View style={styles.clrTiles}></View>
        </View>
      </View>
      <View style={styles.proContainer}>
        <View style={styles.productView}>
          <Image
            source={require('../Components/ProjectData/Logo/Tshirt.jpg')}
            style={styles.img}
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  proContainer: {
    width: RFValue(155),
  },
  productView: {
    margin: RFValue(2),
    backgroundColor: 'orange',
    borderRadius: RFValue(40),
    overflow: 'hidden',
  },
  img: {
    height: RFValue(180),
    width: RFValue(190),
  },
  txt: {
    fontSize: RFValue(15),
  },
  btmContainer: {
    // backgroundColor: 'gold',
    marginTop: RFValue(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: RFValue(5),
  },
  priceTag: {
    fontSize: RFValue(14),
  },
  clrTiles: {
    backgroundColor: 'black',
    width: RFValue(10),
    height: RFValue(10),
  }
})
