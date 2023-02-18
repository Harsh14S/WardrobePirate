import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Product from './Product'
import { RFValue } from 'react-native-responsive-fontsize'
import BottomBar from './BottomBar'
import ProductData from './ProjectData/ProductsImage/ProductData'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import Rough2 from './RatingBar'

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const index = route.params.index;
  return (
    <View style={styles.Container}>
      <View style={styles.productView}>
        <View style={styles.imgContainer}>
          <Image
            source={ProductData[index].img}
            style={styles.img}
            resizeMode='center'
          />
        </View>
        <View style={styles.priceTagContainer}>
          <Text style={styles.priceTag}>${ProductData[index].price}</Text>
        </View>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.productName}> {ProductData[index].title}</Text>
      </View>

      <View style={styles.productRating}>
        <Text> Product Rating</Text>
        <Rough2 />
      </View>

      {/* <View style={styles.productSize}>
        <Text> Product Sizes</Text>
      </View>
      <View style={styles.productDescription}>
        <Text> Product Description</Text>
      </View> */}

      {/* <BottomBar /> */}
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'yellow',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: RFValue(15),
  },
  productView: {
    // backgroundColor: 'grey',
    marginVertical: RFValue(5),
    justifyContent: 'center',
  },
  imgContainer: {
    overflow: 'hidden',
    borderRadius: RFValue(55),
  },
  img: {
    height: RFValue(320),
    // borderRadius: RFValue(36),
    width: RFValue(322),
  },
  priceTag: {
    color: 'white',
    fontSize: RFValue(23),
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(5),
  },
  priceTagContainer: {
    backgroundColor: 'black',
    // height: RFValue(30),
    borderRadius: RFValue(100),
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: RFValue(0),
    right: RFValue(0),
  },
  nameContainer: {
    backgroundColor: 'grey',
    marginTop: RFValue(12),
    marginBottom: RFValue(5),
    // width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: RFValue(24),
  },
  productRating: {
    backgroundColor: 'grey',
    // width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(5),
    marginBottom: RFValue(5),
  },
  productSize: {
    backgroundColor: 'grey',
    paddingVertical: RFValue(20),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  productDescription: {
    backgroundColor: 'grey',
    paddingVertical: RFValue(20),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
})
