import {
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
import { removeFromWishlist } from '../Redux/Actions/WishlistActions';
import HeaderWishlist from './HeaderWishlist';

const Wishlist = () => {
  const wishState = useSelector(state => state.wish);
  const dispatch = useDispatch();
  const removeItemFromWishlist = data => {
    dispatch(removeFromWishlist(data));
  };
  return (
    <View style={styles.container}>
      <HeaderWishlist />
      {
        wishState.length === 0 ? (
          <View style={styles.emptyPage}>
            <Text style={styles.emptyPageTxt}>
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
      }
    </View>
  )
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: RFPercentage(12),
    paddingTop: RFPercentage(2),
  },
  emptyPage: {
    flex: 1,
    alignItems: 'center',
    marginTop: RFPercentage(42),
  },
  emptyPageTxt: {
    fontSize: RFPercentage(3.5),
    fontWeight: '600',
    color: 'lightgrey',
  },
  itemContainer: {
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
