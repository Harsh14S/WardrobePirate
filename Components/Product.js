import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import Categories from './Categories'
import ProductData from './ProjectData/ProductsImage/ProductData'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation, useRoute } from '@react-navigation/native'

// const navigation = useNavigation();


const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {
        ProductData.map((item, index) => (
          <View style={styles.proContainer}>
            <View style={styles.productView}>
              <View style={styles.imgContainer}>
                <Pressable
                  // onPress={() => func('ProductDetails', index)}
                  onPress={() => {
                    navigation.navigate("ProductDetails", {
                      index: index,
                    });
                  }}
                >
                  <Image
                    key={index}
                    source={item.img}
                    style={styles.img}
                  />
                </Pressable>
              </View>
              <TouchableOpacity
                style={styles.favBtn}
                onPress={() => Alert.alert(index + ' Added to your wishlist')}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../Components/ProjectData/Logo/Favorite.png')}
                  style={styles.favImg}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt}>{item.title}</Text>
            <View style={styles.btmContainer}>
              <Text style={styles.priceTag}> ${item.price}</Text>
              <View style={styles.tilesContainer}>
                {
                  item.colors.map((clr) => (
                    <View style={[styles.clrTiles, { backgroundColor: clr }]}></View>
                  ))
                }
              </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(40),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    // marginHorizontal: RFValue(5),
  },
  proContainer: {
    width: RFValue(155),
    marginBottom: RFValue(6),
  },
  productView: {
    margin: RFValue(2),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imgContainer: {
    overflow: 'hidden',
    width: RFValue(190),
    borderRadius: RFValue(40),
  },
  img: {
    height: RFValue(180),
    borderRadius: RFValue(36),
    width: RFValue(190),
    marginLeft: RFValue(35),
  },
  favImg: {
    width: RFValue(20),
    height: RFValue(20),
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
  txt: {
    marginTop: RFValue(3),
    fontSize: RFValue(13),
  },
  btmContainer: {
    marginTop: RFValue(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: RFValue(5),
  },
  priceTag: {
    fontSize: RFValue(14),
  },
  tilesContainer: {
    flexDirection: 'row',
    marginHorizontal: RFValue(5),
  },
  clrTiles: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(2.5),
  }
})
