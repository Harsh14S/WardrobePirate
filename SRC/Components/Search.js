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
import ProductData from '../ProjectData/ProductsImage/ProductData';
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
          style={{
            // flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              marginRight: RFValue(5),
              backgroundColor: 'lightgrey',
              flexDirection: 'row',
              alignItems: 'center',
              borderTopLeftRadius: RFValue(50),
              borderBottomLeftRadius: RFValue(50),
            }}>
            <TextInput
              placeholder="Search"
              style={{
                flex: 1,
                fontSize: RFValue(15),
                color: 'black',
                paddingHorizontal: RFPercentage(2),
                paddingVertical: RFPercentage(2),
              }}
              onChangeText={newText => {
                setText(newText);
              }}
            />
          </View>
          <Pressable
            style={{
              flex: 0.1,
              backgroundColor: 'lightgrey',
              alignItems: 'center',
              paddingHorizontal: RFPercentage(1),
              paddingVertical: RFPercentage(1.5),
              borderTopRightRadius: RFValue(50),
              borderBottomRightRadius: RFValue(50),
            }}
            onPress={() => {
              searchProduct(text);
            }}>
            <Image
              source={require('../ProjectData/Logo/Search.png')}
              resizeMode="contain"
              style={{
                height: RFValue(22),
                width: RFValue(22),
              }}
            />
          </Pressable>
        </View>
      </View>
      {/* Other VIew */}
      {
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
      }
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFPercentage(1.3),
    // marginBottom: RFPercentage(2),
  },
  TopSearchBar: {
    //   flex: 1,
    // backgroundColor: 'lightgrey',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: RFValue(50),
    // width: Dimensions.get('window').width - 100,
    paddingHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(1.2),
    borderRadius: RFPercentage(4),
    marginBottom: RFPercentage(0.5),
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
