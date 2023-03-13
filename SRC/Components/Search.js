import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import { emptySearchItem, searchItem } from '../Redux/Actions/HomeSearchAction';
import { FlatList } from 'react-native-gesture-handler';
import { addToWishlist } from '../Redux/Actions/WishlistActions';
import HeaderSearch from './HeaderSearch';

const Search = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const wishState = useSelector(state => state.wish);
  const searchState = useSelector(state => state.search);
  // console.log("Length: ", searchState.length);
  const addItemToWishlist = item => {
    dispatch(addToWishlist(item));
  };
  const searchProduct = title => {
    dispatch(searchItem(title));
  };
  // console.log("SearchState Length: ", searchState.length);

  return (
    <View style={styles.container}>

      <HeaderSearch />

      {searchState.length === 0 ? (
        <View style={styles.emptyPage}>
          <Text style={styles.emptyPageTxt}>Search Here</Text>
        </View>
      ) :
        (
          <View style={styles.searchProductContainer}>
            <FlatList
              contentContainerStyle={{ alignItems: 'center' }}
              scrollEnabled={false}
              numColumns={2}
              data={searchState}
              // data={searchState.length === 0 ? ProductData : searchState}
              renderItem={({ item, index }) => (
                <View style={styles.proContainer} key={index}>
                  <View style={styles.productView}>
                    <Pressable
                      style={styles.img}
                      onPress={() => {
                        navigation.navigate('ProductDetails', {
                          item: item,
                        });
                      }}>
                      <Image source={item.img} style={styles.img} />
                    </Pressable>
                    <Pressable
                      style={styles.favBtn}
                      onPress={() => {
                        addItemToWishlist(item);
                      }}>
                      <Image
                        source={
                          wishState.includes(item)
                            ? require('../ProjectData/Logo/FavoriteFill.png')
                            : require('../ProjectData/Logo/FavoriteEmpty.png')
                        }
                        style={styles.favImg}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.txt}>{item.title}</Text>
                  <View style={styles.priceAndColorTiles}>
                    <Text style={styles.priceTag}>${item.price}</Text>
                    <View style={styles.tilesContainer}>
                      {item.colors.map((clr, index) => (
                        <View
                          style={[styles.clrTiles, { backgroundColor: clr, right: RFPercentage(index / 1.4) }]}
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
    </View >
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: RFPercentage(2),
    paddingHorizontal: RFPercentage(1.3),
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
  searchProductContainer: {
    // backgroundColor: 'grey',
    paddingBottom: RFPercentage(13),
    marginTop: RFPercentage(1.4),
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
