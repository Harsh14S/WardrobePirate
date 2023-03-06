import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, setItemQuantity } from '../Redux/Actions/CartActions';


// let itemIndex;
let initQuantity = 1;

const CartItems = () => {
  const [quant, setQuant] = useState(initQuantity);
  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemContainer}>
        {cartState.map((item, index) => {
          
          return (
            <View key={index} style={{ flexDirection: 'row' }}>
              <View style={styles.imgContainer}>
                <Image source={item.img} style={styles.img} />
              </View>
              <View style={styles.itemDetails}>
                <View style={styles.itemTitle}>
                  <Text style={styles.itemTitleTxt}>{item.title}</Text>
                </View>
                <View style={styles.itemCateg}>
                  <Text style={styles.itemCategTxt}>{item.categ}</Text>
                </View>
                <View style={styles.priceQuantity}>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <View style={styles.intractionContainer}>
                    <Pressable
                      style={styles.plusminuscontainer}
                      onPress={() => {
                        removeItemFromCart(item);
                        // setQuant(1);
                        console.log("Item: ", item);
                        // console.log('Item Quantity: ', item.quantity);
                      }}>
                      <Image
                        source={require('../ProjectData/Logo/Bin.png')}
                        style={styles.bin}
                      />
                    </Pressable>
                    <Pressable
                      style={styles.plusminuscontainer}
                      onPress={() => {
                        quant >= 2 ? setQuant(quant - 1) : null;
                      }}>
                      <Image
                        source={require('../ProjectData/Logo/Minus.png')}
                        style={styles.plusminus}
                      />
                    </Pressable>
                    <View style={styles.plusminuscontainer}>
                      <Text style={styles.itemQuantity}>{quant}</Text>
                      {/* <Text style={styles.navTxt}>{amount}</Text> */}
                    </View>
                    <Pressable
                      style={styles.plusminuscontainer}
                      onPress={() => {
                        quant <= 9 ? setQuant(quant + 1) : null;
                      }}>
                      <Image
                        source={require('../ProjectData/Logo/Plus.png')}
                        style={styles.plusminus}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            // (itemIndex = index)
          );
        })}
      </ScrollView>
      <View style={styles.billContainer}>
        <View style={styles.billHeadings}>
          <Text style={styles.titleTxt}>Subtotal:</Text>
          <Text style={styles.priceTxt}>$30.00</Text>
        </View>
        <View style={styles.billHeadings}>
          <Text style={styles.titleTxt}>Fee Delivery:</Text>
          <Text style={styles.priceTxt}>$30.00</Text>
        </View>
        <View style={[styles.billHeadings, { paddingBottom: RFValue(70) }]}>
          <Text style={styles.titleTxt}>Discount:</Text>
          <Text style={styles.priceTxt}>$30.00</Text>
        </View>
        <View style={styles.separator} />
        <View style={[styles.billHeadings, { paddingTop: RFValue(8) }]}>
          <Text style={styles.titleTxt}>Total: </Text>
          <Text style={styles.priceTxt}>$30.00</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    padding: RFValue(5),
    // flexDirection: 'row',
    // justifyContent: 'center',
    width: Dimensions.get('window').width - 20,
    marginVertical: RFValue(5),
  },
  itemContainer: {
    // backgroundColor: 'grey',
    marginBottom: RFValue(5),
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
    padding: RFValue(5),
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
  bin: {
    height: RFValue(22),
    width: RFValue(22),
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
  billContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    marginTop: RFValue(5),
    // marginBottom: RFValue(100),
  },
  billHeadings: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: RFValue(4),
  },
  titleTxt: {
    color: 'grey',
    fontWeight: '700',
  },
  priceTxt: {
    color: 'black',
    fontWeight: '600',
  },
  total: {
    marginTop: RFValue(50),
  },
  separator: {
    borderColor: 'lightgrey',
    borderWidth: RFValue(1),
    borderStyle: 'solid',
  },
});
