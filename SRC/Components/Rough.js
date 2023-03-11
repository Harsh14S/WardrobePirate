import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import ProductData from '../ProjectData/ProductsImage/ProductData';


export default Rough = () => {
  return (
    // <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
    //     <Header title={'Chat'} />
    <SafeAreaView style={{ flex: 1, margin: RFPercentage(2), backgroundColor: 'white' }}>
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: RFPercentage(2), backgroundColor: 'white' }}>
        <Image source={ProductData[0].img} style={{ width: RFPercentage(30), height: RFPercentage(30), }}></Image>
        <View style={{ position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', }}>
          <View style={styles.triangleCorner} />
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.triangleCorner} />
            <View style={styles.shape1} />
          </View>
          <View style={styles.oval} />
        </View>
      </View>
      <View style={{ position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', }}>
        <View style={styles.oval}></View>
      </View>
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
        <View style={styles.shape2}></View>
        {/* <View style={styles.triangleCorner1}></View> */}
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  oval: {
    width: RFPercentage(9),
    height: RFPercentage(4),
    borderRadius: 20,
    backgroundColor: "black",
    // transform: [{ scaleX: 1.5 }],
    position: 'absolute'
    // justifyContent:'flex-end',
    // alignSelf:'flex-end'
  },
  shape1: {
    backgroundColor: "white",
    // position: 'absolute',
    width: RFPercentage(10),
    height: RFPercentage(5),
    borderTopLeftRadius: RFPercentage(2.5),
  },
  triangleCorner: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: RFPercentage(3),
    borderBottomWidth: RFPercentage(3),
    borderLeftColor: "transparent",
    borderBottomColor: "white",
    // position: 'absolute',
  },
  triangleCorner1: {
    width: RFPercentage(10),
    height: RFPercentage(10),
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: RFPercentage(10),
    borderTopWidth: RFPercentage(10),
    borderRightColor: "transparent",
    borderTopColor: "black",
    transform: [{ rotate: "180deg" }],
    // position: 'absolute',
  },
  shape2: {
    backgroundColor: "purple",
    // backgroundColor: "transparent",
    // position: 'absolute',
    width: RFPercentage(10),
    height: RFPercentage(10),
    // borderStyle: 'solid',
    // borderLeftWidth: RFPercentage(10),
    borderLeftColor: 'transparent',
    // borderLeftColor: 'green',
    borderRightWidth: RFPercentage(10),
    // borderRightColor: 'transparent',
    // borderRightColor: 'gold',
    // borderBottomWidth: RFPercentage(10),
    // borderBottomColor: 'blue',
    borderTopWidth: RFPercentage(10),
    borderTopColor: 'transparent',
    // border: RFPercentage(100),
    // borderBottomWidth: RFPercentage(10),
    borderBottomEndRadius: RFPercentage(100),
    // borderTopStartRadius: RFPercentage(100),
    // backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: RFPercentage(10),
    borderBottomWidth: RFPercentage(10),
    // borderBottomStartRadius: RFPercentage(10),
    borderRightEndRadius: RFPercentage(10),
    // borderLeftColor: "transparent",
    borderBottomColor: "black",
    // transform: [{ rotate: "180deg" }],
  },
  triangle: {
    width: RFValue(50),
    height: RFValue(50),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftWidth: RFValue(50),
    borderRightWidth: RFValue(50),
    borderBottomWidth: RFValue(100),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
})


