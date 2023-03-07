import {
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
import { removeFromWishlist } from '../Redux/Actions/WishlistActions';

const Wishlist = () => {
  const wishState = useSelector(state => state.wish);
  // console.log("wishState: ", wishState);
  // console.log('Items in Wishlist: ', wishState.length);
  const dispatch = useDispatch();
  const removeItemFromWishlist = data => {
    dispatch(removeFromWishlist(data));
  };
  return (

    wishState.length === 0 ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: RFValue(20), fontWeight: '600', color: 'lightgrey' }}>
          Wishlist Empty
        </Text>
      </View>
    ) : (
      <ScrollView style={styles.itemContainer} showsVerticalScrollIndicator={false}>
        {wishState.map((item, index) => {
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
                      style={[styles.plusminuscontainer, { padding: RFValue(2) }]}
                      onPress={() => {
                        console.log(' item.inWishlist before remove: ', item.inWishlist);
                        removeItemFromWishlist(item);
                        console.log(' item.inWishlist after remove: ', item.inWishlist);
                      }}>
                      <Image
                        source={require('../ProjectData/Logo/Bin.png')}
                        style={styles.bin}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView >
    )
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(10),
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
    // flex: 1,
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
});
