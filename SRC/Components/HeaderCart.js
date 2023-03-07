import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCartItems } from '../Redux/Actions/CartActions';

const HeaderCart = ({ navigation, item }) => {
  const wishState = useSelector(state => state.wish);
  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(emptyCartItems());
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.circle, , { marginLeft: RFValue(5) }]}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../ProjectData/Logo/BackArrow.png')}
          style={styles.img}
        />
      </Pressable>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.text}>My Cart</Text>
      </View>
      <Pressable
        style={[styles.circle, { marginRight: RFValue(10) }]}
        onPress={() => {
          emptyCart();
        }}
      >
        <Image
          source={require('../ProjectData/Logo/Bin.png')}
          style={styles.img}
        />
      </Pressable>
    </View >
  )
}

export default HeaderCart;


const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    // paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(5),
    marginBottom: RFValue(5),
  },
  circle: {
    // backgroundColor: 'skyblue',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: RFValue(5),
    // width: RFValue(40),
    // height: RFValue(40),
    borderRadius: RFValue(25),
    // overflow: 'hidden',
    padding: RFValue(5),
  },
  img: {
    // justifyContent: 'center',
    height: RFValue(20),
    width: RFValue(20),
  },
  headerTitleContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    fontWeight: '600',
  },
  search: {
    marginRight: RFValue(5),
    height: RFValue(40),
    width: RFValue(40),
    borderRadius: RFValue(25),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: RFValue(25),
    width: RFValue(25),
  },
});
