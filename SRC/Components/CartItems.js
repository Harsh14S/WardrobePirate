import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import ProductData from '../ProjectData/ProductsImage/ProductData'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../Redux/Actions/ActionIndex'
import { FlatList } from 'react-native-gesture-handler'

const CartItems = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = (index) => {
    dispatch(removeItemFromCart(index));
  }
  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={({ item, index }) => {
        return (
          <View key={index}>
            <View style={styles.imgContainer}><Image source={ProductData[item].img} style={styles.img} /></View>
            <View style={styles.itemDetails}>
              <View style={styles.itemTitle}>
                <Text style={styles.itemTitleTxt}>{ProductData[item].title}</Text>
              </View>
              <View style={styles.itemCateg}>
                <Text style={styles.itemCategTxt}>{ProductData[item].categ}</Text>
              </View>
              <View style={styles.priceQuantity}>
                <Text style={styles.itemPrice}>${ProductData[item].price}</Text>
                <View style={styles.intractionContainer}>
                  <Pressable
                    style={styles.plusminuscontainer}
                  // onPress={() => setAmount(amount - 1)}
                  >
                    <Image
                      source={require('../ProjectData/Logo/Minus.png')}
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
                      source={require('../ProjectData/Logo/Plus.png')}
                      style={styles.plusminus}
                    />
                  </Pressable>
                  <Pressable
                    style={styles.plusminuscontainer}
                    onPress={() => removeItem(index)}
                  >
                    <Image
                      source={require('../ProjectData/Logo/Bin.png')}
                      style={styles.plusminus}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )
      }} />

    </View >
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
    // backgroundColor: 'yellow',
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
