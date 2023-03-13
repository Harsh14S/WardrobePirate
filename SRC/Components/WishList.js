import {
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
          <View style={{
            flex: 1,
            padding: RFPercentage(0.8),
            width: RFPercentage(49),
            marginBottom: RFPercentage(0.8),
          }} >
            <FlatList
              showsVerticalScrollIndicator={false}
              data={wishState}
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

                        <Pressable
                          style={styles.deleteBtnContainer}
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
                )
              }}
            />
          </View >
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
    alignItems: 'center',
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
    flexDirection: 'row',
    backgroundColor: 'rgb(240, 240, 240)',
    marginVertical: RFPercentage(1.5),
    padding: RFPercentage(0.5),
    borderRadius: RFPercentage(4)
  },
  imgContainer: {
    // backgroundColor: 'red',
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
  deleteBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RFPercentage(2),
  },
  bin: {
    height: RFPercentage(3),
    width: RFPercentage(3),
  },
});
