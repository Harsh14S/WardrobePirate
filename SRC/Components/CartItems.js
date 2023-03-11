import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, setItemQuantity } from '../Redux/Actions/CartActions';
import Users from '../ProjectData/UsersData/UserProfile';

const CartItems = () => {
  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const setQuantity = (item, quantity) => {
    dispatch(setItemQuantity(item, quantity));
  };

  const subtotal = (data) => {
    let subTotal = 0;
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
        <FlatList
          data={cartState}
          renderItem={({ item, index }) => {
            return (
              <View View key={index} style={styles.itemContainer} >
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
                      <Text style={styles.itemQuantity}>{item.quantity}</Text>
                      <Pressable
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
            )
          }}
        />

        <View style={styles.billContainer}>
          <View style={styles.billHeadings}>
            <Text style={styles.billtitleTxt}>Subtotal:</Text>
            <Text style={styles.billpriceTxt}>${parseFloat(Users[0].cart.bill.subTotal).toFixed(2)}</Text>
          </View>
          <View style={styles.billHeadings}>
            <Text style={styles.billtitleTxt}>Fee Delivery:</Text>
            <Text style={styles.billpriceTxt}>${parseFloat(Users[0].cart.bill.FeeDelivery).toFixed(2)}</Text>
          </View>
          <View style={[styles.billHeadings, { paddingBottom: RFValue(70) }]}>
            <Text style={styles.billtitleTxt}>Discount:</Text>
            <Text style={styles.billpriceTxt}>${parseFloat(Users[0].cart.bill.discount).toFixed(2)}</Text>
          </View>
          <View style={styles.separator} />
          <View style={[styles.billHeadings, { paddingTop: RFValue(8) }]}>
            <Text style={styles.billtitleTxt}>Total: </Text>
            <Text style={styles.billpriceTxt}>${parseFloat(Users[0].cart.bill.total).toFixed(2)}</Text>
          </View>
        </View>
      </View >
    )
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFPercentage(0.8),
    width: RFPercentage(49),
    marginVertical: RFPercentage(0.8),
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(240, 240, 240)',
    marginBottom: RFPercentage(1.5),
    padding: RFPercentage(0.5),
    borderRadius: RFPercentage(4)
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: RFValue(5),
  },
  img: {
    height: RFPercentage(11.5),
    width: RFPercentage(12),
    borderRadius: RFPercentage(3),
  },
  itemDetails: {
    flex: 1,
    padding: RFPercentage(1),
  },
  itemTitle: {
    flex: 1,
    marginTop: RFPercentage(0.5),
    marginRight: RFPercentage(0.5)
  },
  itemTitleTxt: {
    color: 'black',
    fontSize: RFPercentage(2),
    fontWeight: '600',
  },
  itemCateg: {
    flex: 1,
  },
  itemCategTxt: {
    color: 'grey',
    fontSize: RFPercentage(1.6),
  },
  priceQuantity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    color: 'black',
    fontSize: RFPercentage(2.1),
    fontWeight: '600',
  },
  intractionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: RFPercentage(13),
  },
  plusminus: {
    height: RFPercentage(3),
    width: RFPercentage(3),
  },
  itemQuantity: {
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
  billContainer: {
    width: '100%',
    marginTop: RFValue(5),
  },
  billHeadings: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: RFValue(4),
  },
  billtitleTxt: {
    color: 'grey',
    fontWeight: '700',
  },
  billpriceTxt: {
    color: 'black',
    fontWeight: '600',
  },
  separator: {
    borderColor: 'lightgrey',
    borderWidth: RFValue(1),
    borderStyle: 'solid',
  },
});
