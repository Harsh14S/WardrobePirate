import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Product from './Product'
import { RFValue } from 'react-native-responsive-fontsize'
import BottomBar from './BottomBar'
import ProductData from './ProjectData/ProductsImage/ProductData'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductDetails = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.productImage}>
        <View style={styles.imgContainer}>
          <Image
            source={ProductData[1].img}
            style={styles.img}
            resizeMode='center'
          />
        </View>
        <TouchableOpacity
          style={styles.favBtn}
          onPress={() => Alert.alert(index + 'Added to your wishlist')}
          activeOpacity={0.7}
        >
          <Image
            source={require('../Components/ProjectData/Logo/Favorite.png')}
            style={styles.favImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.productName}>
        <Text> {ProductData[1].title}</Text>
      </View>
      <View style={styles.productRating}>
        <Text> Product Rating</Text>
      </View>
      <View style={styles.productSize}>
        <Text> Product Sizes</Text>
      </View>
      <View style={styles.productDescription}>
        <Text> Product Description</Text>
      </View>

      {/* <BottomBar /> */}
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RFValue(20),
  },
  productImage: {
    backgroundColor: 'grey',
    // paddingVertical: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
    borderRadius: RFValue(30),
    overflow: 'hidden'
  },
  imgContainer: {
    // width: RFValue(190),
    borderRadius: RFValue(40),
  },
  img: {
    height: RFValue(300),
    width: RFValue(300),
  },
  favBtn: {
    backgroundColor: 'darkorange',
    height: RFValue(30),
    borderRadius: RFValue(20),
    paddingHorizontal: RFValue(12),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    backgroundColor: 'grey',
    paddingVertical: RFValue(20),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  productRating: {
    backgroundColor: 'grey',
    paddingVertical: RFValue(20),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
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
