import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCartItems } from '../Redux/Actions/CartActions'

const MyCartHeader = () => {
  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(emptyCartItems());
  };
  return (
    <View style={styles.TopSearchBar}>
      <Pressable
        style={styles.headerBtnContainer}
        onPress={() => {
          emptyCart();
        }}>
        <Image
          source={require('../ProjectData/Logo/Bin.png')}
          resizeMode="contain"
          style={styles.searchBtnImg}
        />
      </Pressable>
      <View
        style={styles.headerHeading}>
        <Text style={styles.headerTitleTxt}>My Cart</Text>
      </View>
      <Pressable
        style={styles.headerBtnContainer}
        onPress={() => {
          Alert.alert("Towards Payment.......")
        }}>
        <Image
          source={require('../ProjectData/Logo/Payment.png')}
          resizeMode="contain"
          style={styles.searchBtnImg}
        />
      </Pressable>
    </View>
  )
}


export default MyCartHeader

const styles = StyleSheet.create({
  TopSearchBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1.8),
  },
  headerHeading: {
    flex: 1,
    marginHorizontal: RFValue(5),
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(50),
    paddingVertical: RFPercentage(1.5),
  },
  headerTitleTxt: {
    color: 'black',
    fontSize: RFValue(18),
    marginLeft: RFValue(10),
    fontWeight: '600',
  },
  searchTextInput: {
    flex: 1,
    fontSize: RFValue(15),
    color: 'black',
    paddingLeft: RFPercentage(3),
    paddingRight: RFPercentage(1),
    paddingVertical: RFPercentage(0.2),
  },
  headerBtnContainer: {
    flex: 0.08,
    backgroundColor: 'rgb(240, 240, 240)',
    alignItems: 'center',
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(5),
  },
  searchBtnImg: {
    height: RFPercentage(3.3),
    width: RFPercentage(3.3),
  },
})
