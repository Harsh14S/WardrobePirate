import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
// import BottomBar from './BottomBar'
import ProductData from './ProjectData/ProductsImage/ProductData'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import RatingBar from './RatingBar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Add2Cart = createBottomTabNavigator();
let index = 0;

const ProductDetailsNav = ({ navigation }) => {
  const route = useRoute();
  index = route.params.index;
  return (
    <Add2Cart.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          // backgroundColor: 'transparent',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          marginTop: RFValue(20),
          marginBottom: RFValue(10),
          marginHorizontal: RFValue(10),
          paddingHorizontal: RFValue(5),
          borderRadius: RFValue(45),
          height: RFValue(75),
          shadowColor: 'black',
          // shadowOffset: {
          //   height: RFValue(0),
          //   width: RFValue(0),
          // },
          // shadowOpacity: RFValue(1),
          // shadowRadius: RFValue(20),
          // opacity: RFValue(1),
          // elevation: RFValue(1),
        },
      }}
    >
      <Add2Cart.Screen name="ProductDetails" component={ProductDetails} options={{
        tabBarIcon: () => (
          <View style={styles.tabBarContainer}>
            <View style={styles.intractionContainer}>
              <TouchableOpacity style={styles.plusminuscontainer}>
                <Image
                  source={require('../Components/ProjectData/Logo/Minus.png')}
                  style={styles.plusminus}
                />
              </TouchableOpacity>
              <View style={styles.plusminuscontainer}>
                <Text style={styles.navTxt}>1</Text>
              </View>
              <TouchableOpacity style={styles.plusminuscontainer}>
                <Image
                  source={require('../Components/ProjectData/Logo/Plus.png')}
                  style={styles.plusminus}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
              <Text style={styles.navTxt}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        )
      }} />
    </Add2Cart.Navigator>
  )
}

const ProductDetails = () => {
  // const route = useRoute();
  // const index
  const [selectedId, setSelectedId] = useState(0);

  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <View style={styles.productViewCenter}>
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
          <View style={{ width: Dimensions.get('window').width - 35, flexDirection: 'row' }}>
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
                  }}
                  key={index}
                >
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

export default ProductDetailsNav

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: RFValue(15),
  },
  productViewCenter: {
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
    fontSize: RFValue(25),
    fontWeight: '500',
    color: 'black',
  },
  productRating: {
    // backgroundColor: 'yellow',
    marginVertical: RFValue(5),
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
    color: 'black',
  },
  productDescContainer: {
    color: 'black',
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
  },
  tabBarContainer: {
    flexDirection: 'row',
    // backgroundColor: 'white',
    top: Platform.OS === 'ios' ? RFValue(13) : null,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange',
    borderRadius: RFValue(50),
    height: RFValue(62),
    paddingHorizontal: RFValue(45),
    marginLeft: Platform.OS === 'ios' ? null : RFValue(21),
  },
  navTxt: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16)
  },
  intractionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(19),
  },
  plusminus: {
    tintColor: 'white',
    height: RFValue(26),
    width: RFValue(26),
  },
  plusminuscontainer: {
    marginHorizontal: RFValue(6),
  }
})
