import { Dimensions, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import ProductData from './ProjectData/ProductsImage/ProductData'
import { ScrollView } from 'react-native-gesture-handler'
import RatingBar from './RatingBar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Add2Cart = createBottomTabNavigator();
let index = 0;

const ProductDetailsNav = ({ navigation, route }) => {
  // const [item, setItem] = useState(1);
  const [amount, setAmount] = useState(0);
  index = route.params.index;
  return (
    <Add2Cart.Navigator
      screenOptions={{
        "tabBarShowLabel": false,
        headerShown: false,
        tabBarStyle: {
          "display": "flex",
          backgroundColor: 'black',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          marginTop: RFValue(20),
          marginBottom: RFValue(10),
          marginHorizontal: RFValue(10),
          paddingHorizontal: RFValue(5),
          borderRadius: RFValue(45),
          height: RFValue(75),
          shadowColor: 'white',
          shadowOffset: {
            height: RFValue(0),
            width: RFValue(0),
          },
          shadowOpacity: RFValue(1),
          shadowRadius: RFValue(20),
          opacity: RFValue(1),
          elevation: RFValue(1),
        },
      }}
    >
      <Add2Cart.Screen name="ProductDetail" component={ProductDetails} options={{
        tabBarIcon: () => (
          <View style={styles.tabBarContainer}>
            <View style={styles.intractionContainer}>
              <Pressable
                style={styles.plusminuscontainer}
                onPress={() => setAmount(amount - 1)}
              >
                <Image
                  source={require('../Components/ProjectData/Logo/Minus.png')}
                  style={styles.plusminus}
                />
              </Pressable>
              <View style={styles.plusminuscontainer}>
                <Text style={styles.navTxt}>{amount}</Text>
              </View>
              <Pressable
                style={styles.plusminuscontainer}
                onPress={() => setAmount(amount + 1)}
              >
                <Image
                  source={require('../Components/ProjectData/Logo/Plus.png')}
                  style={styles.plusminus}
                />
              </Pressable>
            </View>
            <Pressable
              style={styles.iconContainer}
              onPress={() => {
                navigation.navigate('Cart', {
                  index: index,
                });
              }}
            >
              <Text style={styles.navTxt}>Add To Cart</Text>
            </Pressable>
          </View>
        )
      }} />
    </Add2Cart.Navigator>
  );
};

const ProductDetails = ({ }) => {
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
                <Pressable
                  style={[styles.btn, { backgroundColor: selectedId === index ? 'black' : 'white' }]}
                  onPress={() => {
                    setSelectedId(index);
                  }}
                  key={index}
                >
                  <Text style={[styles.title, { color: selectedId === index ? 'white' : 'black' }]}>{item}</Text>
                </Pressable>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.productDescContainer}>
          <Text style={styles.productDescTitle}>Description</Text>
          <Text style={styles.productDesc}>{ProductData[index].details}</Text>
        </View>
      </View>
      <View style={styles.empty} />

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
    // paddingHorizontal: RFValue(12),
    width: Dimensions.get('window').width - 290,
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
    // backgroundColor: 'skyblue',
    top: Platform.OS === 'ios' ? RFValue(13) : null,
    width: Dimensions.get('window').width - 40,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange',
    borderRadius: RFValue(50),
    height: RFValue(62),
    paddingHorizontal: RFValue(45),
  },
  navTxt: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
  intractionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: RFValue(10),
  },
  plusminus: {
    tintColor: 'white',
    height: RFValue(26),
    width: RFValue(26),
  },
  plusminuscontainer: {
    marginHorizontal: RFValue(4),
    width: RFValue(28),
  },
  empty: {
    padding: RFValue(43),
  },
})
