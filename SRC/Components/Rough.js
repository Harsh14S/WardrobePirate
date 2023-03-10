import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import ProductData from '../ProjectData/ProductsImage/ProductData';


export default Rough = () => {
  return (
    // <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
    //     <Header title={'Chat'} />
    <SafeAreaView style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: RFPercentage(2), backgroundColor: 'white' }}>
      <Image source={ProductData[0].img} style={{ width: RFPercentage(30), height: RFPercentage(30), }}></Image>
      {/* <View style={{}}></View> */}
      <View style={{}}>

      </View>
      <View style={styles.triangleCorner} />
      <View style={{ position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', }}>
        <View style={styles.shape1}></View>
        <View style={styles.oval}></View>
      </View>
    </SafeAreaView>
    // </View>
  )
}

const styles = StyleSheet.create({
  oval: {
    width: 55,
    height: 30,
    borderRadius: 20,
    backgroundColor: "black",
    // transform: [{ scaleX: 1.5 }],
    // position: 'absolute'
    // justifyContent:'flex-end',
    // alignSelf:'flex-end'
  },
  shape1: {
    backgroundColor: "white",
    position: 'absolute',
    width: 60,
    height: 35,
    borderTopLeftRadius: 20,
  },
  triangleCorner: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: "transparent",
    borderTopColor: "red",
    transform: [{ rotate: "180deg" }],
    position: 'absolute',
  },
})


