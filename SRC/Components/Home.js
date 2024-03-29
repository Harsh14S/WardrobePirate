import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Categories from './Categories';
import NewSeasonsEss from './NewSeasonsEss';
import TopSearchBar from './HeaderHome';
import { RFValue } from 'react-native-responsive-fontsize';
import ProductData from '../ProjectData/ProductsImage/ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/Actions/WishlistActions';
// import Toast from 'react-native-toast-message';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const wishState = useSelector(state => state.wish);
  // console.log("Home Items: ", items.length);
  const addItemToWishlist = item => {
    dispatch(addToWishlist(item));
  };
  return (
    <View style={styles.container}>
      <View style={styles.TopSearchBar}>
        <TopSearchBar />
      </View>
      <ScrollView
        style={styles.inContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.NewSeasonsEss}>
          <NewSeasonsEss />
        </View>
        <View style={styles.Categories}>
          <Categories />
        </View>
        <View style={styles.Product}>
          <View style={ProductStyle.container}>
            {ProductData.map((item, index) => (
              <View style={ProductStyle.proContainer} key={item.id}>
                <View style={ProductStyle.productView}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('ProductDetails', {
                        item: item,
                      });
                    }}>
                    <Image
                      source={item.img}
                      style={ProductStyle.img}
                    />
                  </Pressable>
                  <Pressable
                    style={ProductStyle.favBtn}
                    onPress={() => {
                      addItemToWishlist(item);
                    }}>
                    <Image
                      source={
                        (item.inWishlist)
                          ? require('../ProjectData/Logo/FavoriteFill.png')
                          : require('../ProjectData/Logo/FavoriteEmpty.png')
                      }
                      style={ProductStyle.favImg}
                    />
                  </Pressable>
                </View>
                <Text style={ProductStyle.txt}>{item.title}</Text>
                <View style={ProductStyle.btnContainer}>
                  <Text style={ProductStyle.priceTag}> ${item.price}</Text>
                  <View style={ProductStyle.tilesContainer}>
                    {item.colors.map((clr, index) => (
                      <View
                        style={[ProductStyle.clrTiles, { backgroundColor: clr }]}
                        key={index}
                      />
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.empty} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: RFValue(10),
    // paddingHorizontal: RFValue(10),
  },
  TopSearchBar: {
    // backgroundColor: 'grey',
    width: '100%',
    marginTop: RFValue(0),
    height: RFValue(40),
    justifyContent: 'center',
    width: Dimensions.get('window').width - 30,
  },
  inContainer: {
    // flex: 1,
    width: Dimensions.get('window').width - 25,
    borderRadius: RFValue(40),
    marginTop: RFValue(10),
  },
  NewSeasonsEss: {
    flex: 1,
    height: RFValue(140),
    marginTop: RFValue(10),
  },
  Categories: {
    height: RFValue(40),
    justifyContent: 'center',
    marginTop: RFValue(10),
  },
  Product: {
    marginTop: RFValue(10),
  },
  BottomBar: {
    width: Dimensions.get('window').width - 30,
    borderRadius: RFValue(50),
    marginBottom: RFValue(20),
    position: 'absolute',
    margin: 20,
  },
  empty: {
    padding: RFValue(43),
  },
});

const ProductStyle = StyleSheet.create({
  container: {
    // borderRadius: RFValue(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: RFValue(1),
  },
  proContainer: {
    width: RFValue(155),
    marginBottom: RFValue(6),
  },
  productView: {
    margin: RFValue(2),
    // borderRadius: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: RFValue(180),
    borderRadius: RFValue(36),
    width: Dimensions.get('window').width / 2 - 25,
  },
  favImg: {
    tintColor: 'white',
    width: RFValue(19),
    height: RFValue(19),
  },
  favBtn: {
    backgroundColor: 'darkorange',
    height: RFValue(30),
    borderRadius: RFValue(20),
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(17),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: RFValue(0),
    right: RFValue(0),
  },
  txt: {
    marginTop: RFValue(3),
    fontSize: RFValue(13),
  },
  btnContainer: {
    marginTop: RFValue(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: RFValue(5),
  },
  priceTag: {
    fontSize: RFValue(14),
  },
  tilesContainer: {
    flexDirection: 'row',
    marginHorizontal: RFValue(5),
  },
  clrTiles: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(2.5),
  },
});
