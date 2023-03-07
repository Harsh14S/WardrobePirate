import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { billCounter, removeFromCart, setItemQuantity } from '../Redux/Actions/CartActions';
import Users from '../ProjectData/UsersData/UserProfile';

// const bill = Users[0].cart.bill;

const CartItems = () => {
  const cartState = useSelector(state => state.cart);
  // console.log("Cart State: ", cartState);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const setQuantity = (item, quantity) => {
    dispatch(setItemQuantity(item, quantity));
  };
  // console.log("CartState: ", cartState);

  const subtotal = (data) => {
    let subTotal = 0;
    // console.log("Bill: ", bill);
    data.map((item) => {
      subTotal = subTotal + (item.quantity * item.price);
    })
    Users[0].cart.bill.subTotal = subTotal;
    Users[0].cart.bill.FeeDelivery = 30;
    Users[0].cart.bill.discount = 20;
    Users[0].cart.bill.total = subTotal - Users[0].cart.bill.discount + Users[0].cart.bill.FeeDelivery;
    return null;
  }
  subtotal(cartState);
  return (
    cartState.length === 0 ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: RFValue(20), fontWeight: '600', color: 'lightgrey' }}>
          Empty Cart
        </Text>
      </View>
    ) : (
      <View style={styles.container}>
        <ScrollView style={styles.itemContainer} showsVerticalScrollIndicator={false}>
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
                        }}>
                        <Image
                          source={require('../ProjectData/Logo/Bin.png')}
                          style={styles.bin}
                        />
                      </Pressable>
                      <Pressable
                        style={styles.plusminuscontainer}
                        onPress={() => {
                          item.quantity >= 2
                            ? setQuantity(item, item.quantity - 1)
                            : removeItemFromCart(item);

                        }}>
                        <Image
                          source={require('../ProjectData/Logo/Minus.png')}
                          style={styles.plusminus}
                        />
                      </Pressable>
                      <View style={styles.plusminuscontainer}>
                        <Text style={styles.itemQuantity}>{item.quantity}</Text>
                      </View>
                      <Pressable
                        style={styles.plusminuscontainer}
                        onPress={() => {
                          item.quantity <= 9
                            ? setQuantity(item, item.quantity + 1)
                            : null;
                          // billcounter(item, item.quantity);
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
            );
          })}
        </ScrollView>
        <View style={styles.billContainer}>
          <View style={styles.billHeadings}>
            <Text style={styles.titleTxt}>Subtotal:</Text>
            <Text style={styles.priceTxt}>${parseFloat(Users[0].cart.bill.subTotal).toFixed(2)}</Text>
            {/* <Text style={styles.priceTxt}>${subtotal(cartState)}</Text> */}
            {/* <Text style={styles.priceTxt}>${parseFloat(subtotal(cartState)).toFixed(2)}</Text> */}
          </View>
          <View style={styles.billHeadings}>
            <Text style={styles.titleTxt}>Fee Delivery:</Text>
            <Text style={styles.priceTxt}>${parseFloat(Users[0].cart.bill.FeeDelivery).toFixed(2)}</Text>
          </View>
          <View style={[styles.billHeadings, { paddingBottom: RFValue(70) }]}>
            <Text style={styles.titleTxt}>Discount:</Text>
            <Text style={styles.priceTxt}>${parseFloat(Users[0].cart.bill.discount).toFixed(2)}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.billHeadings, { paddingTop: RFValue(8) }]}>
            <Text style={styles.titleTxt}>Total: </Text>
            <Text style={styles.priceTxt}>${parseFloat(Users[0].cart.bill.total).toFixed(2)}</Text>
          </View>
        </View>
      </View>)
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
