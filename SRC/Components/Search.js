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
import { searchItem } from '../Redux/Actions/HomeSearchAction';
import { FlatList } from 'react-native-gesture-handler';

const Triangle = () => {
  return <View style={[styles.triangle]} />;
};
const TriangleCorner = () => {
  return <View style={styles.triangleCorner} />;
};

const Search = () => {
  const [text, setText] = useState('');
  const searchState = useSelector(state => state.homeSearch);
  const dispatch = useDispatch();
  const searchProduct = title => {
    dispatch(searchItem(title));
  };
  console.log("SearchState Length: ", searchState.length);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.TopSearchBar}>
        <View
          style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search"
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.searchTextInput}
            onChangeText={newText => {
              setText(newText);
            }}
          />
        </View>
        <Pressable
          style={styles.searchBtnContainer}
          onPress={() => {
            searchProduct(text);
          }}>
          <Image
            source={require('../ProjectData/Logo/Search.png')}
            resizeMode="contain"
            style={styles.searchBtnImg}
          />
        </Pressable>
      </View>
      {/* Other VIew */}
      {searchState.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: RFValue(20), fontWeight: '600', color: 'lightgrey' }}>Search Here</Text>
        </View>
      ) :
        (
          <View style={{ flex: 1 }}>
            <FlatList data={searchState}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={productDetailsStyle.productViewCenter} key={index}>
                  <View style={productDetailsStyle.productView}>
                    <Image source={item.img} style={productDetailsStyle.img} />
                    <View style={productDetailsStyle.priceTagContainer}>
                      <Text style={productDetailsStyle.priceTag}>${item.price}</Text>
                    </View>
                  </View>
                  <View style={productDetailsStyle.nameContainer}>
                    <Text style={productDetailsStyle.productName}>{item.title}</Text>
                  </View>
                  <View style={productDetailsStyle.productSize}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      {item.size.map((item, index) => (
                        <Pressable
                          style={[
                            productDetailsStyle.btn,
                            { backgroundColor: 'white' },
                          ]}
                          onPress={() => {
                            setSelectedId(index);
                          }}
                          key={index}>
                          <Text
                            style={[
                              productDetailsStyle.sizeTitle,
                              { color: 'black' },
                            ]}>
                            {item}
                          </Text>
                        </Pressable>
                      ))}
                    </ScrollView>
                  </View>
                  <View style={productDetailsStyle.productDescContainer}>
                    <Text style={productDetailsStyle.productDescTitle}>Description</Text>
                    <Text style={productDetailsStyle.productDesc}>{item.details}</Text>
                  </View>
                  <View style={productDetailsStyle.empty} />
                </View>
              )} />
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
    paddingVertical: RFValue(10),
    paddingHorizontal: RFPercentage(1.3),
  },
  TopSearchBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(0.5),
  },
  searchBarContainer: {
    flex: 0.92,
    marginRight: RFValue(5),
    backgroundColor: 'rgb(240, 240, 240)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFValue(50),
    paddingVertical: RFPercentage(1.5),
  },
  searchTextInput: {
    flex: 1,
    fontSize: RFValue(15),
    color: 'black',
    paddingLeft: RFPercentage(3),
    paddingRight: RFPercentage(1),
    paddingVertical: RFPercentage(0.2),
  },
  searchBtnContainer: {
    flex: 0.08,
    backgroundColor: 'rgb(240, 240, 240)',
    alignItems: 'center',
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(5),
  },
  searchBtnImg: {
    height: RFValue(22),
    width: RFValue(22),
  },
  triangle: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: RFValue(50),
    borderRightWidth: RFValue(50),
    borderBottomWidth: RFValue(100),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  triangleCorner: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: RFValue(100),
    borderTopWidth: RFValue(100),
    // borderRightColor: 'transparent',
    borderTopLeftRadius: RFValue(100),
    borderTopRightRadius: RFValue(100),
    // borderBottomLeftRadius: RFValue(100),
    // borderBottomRightRadius: RFValue(100),
    borderTopColor: 'red',
    transform: [{ rotate: '180deg' }],
  },
});

const productDetailsStyle = StyleSheet.create({
  productViewCenter: {
    alignItems: 'center',
    paddingBottom: RFValue(60),
  },
  productView: {
    borderRadius: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: RFValue(350),
    width: Dimensions.get('window').width - 30,
    borderRadius: RFValue(36),
  },
  priceTag: {
    color: 'white',
    fontSize: RFValue(23),
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(5),
  },
  priceTagContainer: {
    backgroundColor: 'black',
    borderRadius: RFValue(100),
    // paddingHorizontal: RFValue(12),
    width: Dimensions.get('window').width - 290,
    paddingVertical: RFValue(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: RFValue(0),
    right: RFValue(0),
  },
  nameContainer: {
    marginTop: RFValue(8),
    marginBottom: RFValue(5),
    width: Dimensions.get('window').width - 35,
  },
  productName: {
    fontSize: RFValue(25),
    fontWeight: '500',
    color: 'black',
  },
  productRating: {
    // backgroundColor: 'yellow',
    marginVertical: RFValue(5),
  },
  ratingText: {
    marginHorizontal: RFValue(8),
  },
  productSize: {
    flexDirection: 'row',
    marginVertical: RFValue(10),
  },
  sizeTitle: {
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(4),
    marginHorizontal: RFValue(3.5),
    paddingHorizontal: RFValue(17),
    paddingVertical: RFValue(12),
    marginVertical: RFValue(2),
    borderRadius: RFValue(12),
    elevation: RFValue(1),
    shadowColor: 'black',
    shadowOffset: {
      height: RFValue(1),
      width: RFValue(0),
    },
    shadowRadius: RFValue(2),
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: RFValue(15),
    color: 'black',
  },
  productDescContainer: {
    color: 'black',
    width: '90%',
    justifyContent: 'center',
  },
  productDescTitle: {
    fontWeight: '600',
    fontSize: RFValue(13),
    marginTop: RFValue(7),
  },
  productDesc: {
    marginTop: RFValue(12),
    fontSize: RFValue(13),
    textAlign: 'justify',
    marginBottom: RFValue(25),
  },
});
