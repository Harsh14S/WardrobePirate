import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Users from '../ProjectData/UsersData/UserProfile';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../Redux/Actions/WishlistActions';

const HeaderProductDetails = ({ navigation, item }) => {

  const wishState = useSelector(state => state.wish);
  const cartState = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const addItemToWishlist = data => {
    dispatch(addToWishlist(data));
  };

  const removeItemFromWishlist = data => {
    dispatch(removeFromWishlist(data));
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
        <Text style={styles.text}>Product Details</Text>
      </View>
      <Pressable
        style={[styles.circle, { marginRight: RFValue(10) }]}
        onPress={() => {
          wishState.includes(item) ? removeItemFromWishlist(item) : addItemToWishlist(item);
          // removeItemFromWishlist(item);
          // console.log(item);
        }}
      >
        <Image
          source={wishState.includes(item) ? require('../ProjectData/Logo/FavoriteFill.png') : require('../ProjectData/Logo/FavoriteEmpty.png')}
          style={styles.img}
        // source={require('../ProjectData/Logo/FavoriteEmpty.png')}
        />
      </Pressable>
    </View >
  )
}

export default HeaderProductDetails;


const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    // paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(5),
    // marginBottom: RFPercentage(1.4),
  },
  circle: {
    backgroundColor: 'rgb(240, 240, 240)',
    // width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: RFValue(5),
    // width: RFValue(40),
    // height: RFValue(40),
    borderRadius: RFValue(25),
    // overflow: 'hidden',
    padding: RFPercentage(1.8),
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
    // marginLeft: RFValue(5),
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
