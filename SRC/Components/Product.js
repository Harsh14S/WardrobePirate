import { Alert, Image, Pressable, StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import ProductData from '../ProjectData/ProductsImage/ProductData'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Actions/WishlistActions'

export default Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const wishState = useSelector(state => state.wish);
  const searchState = useSelector(state => state.search);
  // console.log("Length: ", searchState.length);
  const addItemToWishlist = item => {
    dispatch(addToWishlist(item));
  };
  return (
    <View style={ProductStyle.container}>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        scrollEnabled={false}
        numColumns={2}
        data={ProductData}
        // data={searchState.length === 0 ? ProductData : searchState}
        renderItem={({ item, index }) => (
          <View style={ProductStyle.proContainer} key={index}>
            <View style={ProductStyle.productView}>
              <Pressable
                style={ProductStyle.img}
                onPress={() => {
                  navigation.navigate('ProductDetails', {
                    item: item,
                  });
                }}>
                <Image source={item.img} style={ProductStyle.img} />
              </Pressable>
              <Pressable
                style={ProductStyle.favBtn}
                onPress={() => {
                  addItemToWishlist(item);
                }}>
                <Image
                  source={
                    wishState.includes(item)
                      ? require('../ProjectData/Logo/FavoriteFill.png')
                      : require('../ProjectData/Logo/FavoriteEmpty.png')
                  }
                  style={ProductStyle.favImg}
                />
              </Pressable>
            </View>
            <Text style={ProductStyle.txt}>{item.title}</Text>
            <View style={ProductStyle.priceAndColorTiles}>
              <Text style={ProductStyle.priceTag}>${item.price}</Text>
              <View style={ProductStyle.tilesContainer}>
                {item.colors.map((clr, index) => (
                  <View
                    style={[ProductStyle.clrTiles, { backgroundColor: clr, right: RFPercentage(index / 1.4) }]}
                    key={index}
                  />
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}


const ProductStyle = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    paddingBottom: RFPercentage(13),
    // marginBottom: RFPercentage(1.4),
    // marginHorizontal: RFPercentage(1.7),
  },
  proContainer: {
    marginHorizontal: RFPercentage(1),
    width: RFPercentage(22),
    marginBottom: RFPercentage(1.2)
  },
  productView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  img: {
    height: RFPercentage(25),
    width: RFPercentage(22),
    borderRadius: RFPercentage(5),
  },
  favImg: {
    tintColor: 'white',
    width: RFPercentage(3),
    height: RFPercentage(3),
  },
  favBtn: {
    backgroundColor: 'rgb(253, 110, 0)',
    borderRadius: RFPercentage(20),
    paddingHorizontal: RFPercentage(2.4),
    paddingVertical: RFPercentage(1),
    position: 'absolute',
  },
  txt: {
    marginTop: RFPercentage(0.9),
    fontSize: RFPercentage(1.87),
    fontWeight: '600',
  },
  priceAndColorTiles: {
    marginTop: RFPercentage(0.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTag: {
    fontSize: RFPercentage(1.8),
    fontWeight: '600',
    alignSelf: 'center'
  },
  tilesContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  clrTiles: {
    width: RFPercentage(1.5),
    height: RFPercentage(1.5),
    borderRadius: RFValue(2.5),
  },
});
