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
import React, {useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {searchItem} from '../Redux/Actions/HomeSearchAction';
import ProductData from '../ProjectData/ProductsImage/ProductData';

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
    searchItem(title);
  };
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.TopSearchBar}>
        <View
          style={{
            // flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'blue',
            // padding: RFValue(1),
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
              //   paddingLeft: RFValue(7),
              // marginRight: RFValue(5),
            }}>
            <TextInput
              placeholder="Search"
              style={{
                // backgroundColor: 'orange',
                flex: 1,
                fontSize: RFValue(15),
                color: 'black',
                paddingHorizontal: RFValue(10),
              }}
              onChangeText={newText => {
                setText(newText);
              }}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: 'lightgrey',
              alignItems: 'center',
              padding: RFValue(10),
              // marginRight: RFValue(5),
              //   borderRadius: RFValue(40),
              borderTopRightRadius: RFValue(50),
              borderBottomRightRadius: RFValue(50),
            }}
            onPress={() => {
              //   searchProduct(text);
              console.log('Search Text: ', text);
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
        <View
          style={{
            backgroundColor: 'gold',
            flex: 1,
            //   height: 100,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: RFPercentage(0.5),
            }}>
            <Image
              source={ProductData[0].img}
              resizeMode="contain"
              style={{
                height: RFPercentage(68),
                width: RFPercentage(100),
                //   height: RFValue(300),
                //   width: RFValue(300),
                //   justifyContent: 'center',
                //   alignItems: 'center',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              // justifyContent: 'center',
              // alignItems: 'center',
              marginVertical: RFPercentage(0.5),
              flexDirection: 'row',
              width: '100%',
              // paddingHorizontal: RFPercentage(3.89),
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: RFPercentage(3.3),
                fontWeight: '600',
                textAlign: 'justify',
                marginHorizontal: RFPercentage(1),
              }}>
              Title:
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: RFPercentage(3),
                fontWeight: '400',
                textAlign: 'justify',
                //   marginRight: RFPercentage(1),
              }}>
              {ProductData[0].title}
            </Text>
          </View>
        </View>
      }
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
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
    transform: [{rotate: '180deg'}],
  },
});
