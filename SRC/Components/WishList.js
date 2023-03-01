import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromWishlist} from '../Redux/Actions/WishListActions';

const WishList = () => {
  const items = useSelector(state => state.wish);
  console.log('Items in Cart: ', items.length);
  const dispatch = useDispatch();
  const removeItem = item => {
    dispatch(removeFromWishlist(item));
  };

  if (items.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: RFValue(20), fontWeight: '600'}}>
          Wishlist Empty
        </Text>
      </View>
    );
  } else
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={styles.container} key={index}>
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
                    style={[
                      styles.plusminuscontainer,
                      {
                        width: RFValue(80),
                        backgroundColor: 'black',
                        padding: RFValue(5),
                      },
                    ]}
                    onPress={() => {
                      removeItem(item);
                      // console.log("BTN Item: ", item);
                      // console.log("Index: ", ProductData.id);
                      // console.log("Item: ", item);
                      // console.log("Index: ", index);
                    }}>
                    <Text style={{color: 'white'}}>Remove</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: RFValue(5),
    height: RFValue(100),
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
  plusminuscontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(4),
    // width: RFValue(28),
  },
  itemQuantity: {
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
});
