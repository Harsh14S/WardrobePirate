import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
// import BottomBar from './BottomBar'
import ProductData from './ProjectData/ProductsImage/ProductData'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import RatingBar from './RatingBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ProductDetails = () => {
  const route = useRoute();
  const index = route.params.index;
  const [selectedId, setSelectedId] = useState(0);

  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <View style={styles.productViewCent}>
        <View style={styles.productView}>
          <Image
            source={ProductData[index].img}
            style={styles.img}
          />
          <View style={styles.priceTagContainer}>
            <Text style={styles.priceTag}>${ProductData[index].price}</Text>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.productName}>{ProductData[index].title}</Text>
        </View>
        <View style={styles.productRating}>
          <View style={{ width: Dimensions.get('window').width - 35 }}>
            <RatingBar />
            <Text style={styles.ratingText}>50+ reviews</Text>
          </View>
        </View>
        <View style={styles.productSize}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              ProductData[index].size.map((item, index) => (
                <TouchableOpacity
                  style={[styles.btn, { backgroundColor: selectedId === index ? 'black' : 'white' }]}
                  onPress={() => {
                    setSelectedId(index);
                  }}>
                  <Text style={[styles.title, { color: selectedId === index ? 'white' : 'black' }]}>{item}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.productDescContainer}>
          <Text style={styles.productDescTitle}>Description</Text>
          <Text style={styles.productDesc}>{ProductData[index].details}</Text>
        </View>

      </View>

      {/* <BottomBar /> */}
    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: RFValue(15),
  },
  productViewCent: {
    alignItems: 'center',
  },
  productView: {
    borderRadius: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: RFValue(350),
    width: Dimensions.get('window').width - 30,
    borderRadius: RFValue(36),
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
    marginTop: RFValue(8),
    marginBottom: RFValue(5),
    width: Dimensions.get('window').width - 35,
  },
  productName: {
    fontSize: RFValue(24),
  },
  productRating: {
    flexDirection: 'row',
    marginTop: RFValue(5),
    marginBottom: RFValue(5),
  },
  ratingText: {
    marginHorizontal: RFValue(8),
  },
  productSize: {
    flexDirection: 'row',
    marginVertical: RFValue(10),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(4),
    marginHorizontal: RFValue(5),
    paddingHorizontal: RFValue(17),
    paddingVertical: RFValue(12),
    borderRadius: RFValue(12),
  },
  title: {
    fontSize: RFValue(15),
  },
  productDescContainer: {
    width: '90%',
    justifyContent: 'center',
  },
  productDescTitle: {
    fontWeight: '600',
    fontSize: RFValue(13),
    marginTop: RFValue(7),
  },
  productDesc: {
    marginTop: RFValue(12),
    fontSize: RFValue(13),
    textAlign: 'justify',
    marginBottom: Platform.OS === 'ios' ? RFValue(40) : RFValue(15),
  }
})
