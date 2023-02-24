import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import ProductData from './ProjectData/ProductsImage/ProductData'

const CartItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}><Image source={ProductData[0].img} style={styles.img} /></View>
      <View style={styles.itemDetails}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleTxt}>{ProductData[0].title}</Text>
        </View>
        <View style={styles.itemCateg}>
          <Text style={styles.itemCategTxt}>{ProductData[0].categ}</Text>
        </View>
        <View style={styles.priceQuantity}>
          <Text style={styles.itemPrice}>${ProductData[0].price}</Text>
          <View style={styles.intractionContainer}>
            <Pressable
              style={styles.plusminuscontainer}
            // onPress={() => setAmount(amount - 1)}
            >
              <Image
                source={require('./ProjectData/Logo/Minus.png')}
                style={styles.plusminus}
              />
            </Pressable>
            <View style={styles.plusminuscontainer}>
              <Text style={styles.itemQuantity}>2</Text>
              {/* <Text style={styles.navTxt}>{amount}</Text> */}
            </View>
            <Pressable
              style={styles.plusminuscontainer}
            // onPress={() => setAmount(amount + 1)}
            >
              <Image
                source={require('./ProjectData/Logo/Plus.png')}
                style={styles.plusminus}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: RFValue(5),
  },
  imgContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: RFValue(5),
  },
  img: {
    height: RFValue(85),
    width: RFValue(85),
    borderRadius: RFValue(20),
  },
  itemDetails: {
    flex: 1,
    padding: RFValue(5)
  },
  itemTitle: {
    flex: 1,
  },
  itemTitleTxt: {
    // flex: 1,
    color: 'black',
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  itemCateg: {
    flex: 1,
  },
  itemCategTxt: {
    color: 'grey',
    fontSize: RFValue(11),
  },
  priceQuantity: {
    // backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    color: 'black',
    fontSize: RFValue(15),
    fontWeight: '600',
  },
  intractionContainer: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: RFValue(10),
  },
  plusminus: {
    height: RFValue(26),
    width: RFValue(26),
  },
  plusminuscontainer: {
    marginHorizontal: RFValue(4),
    width: RFValue(28),
  },
  itemQuantity: {
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
})
