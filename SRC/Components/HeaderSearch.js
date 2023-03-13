import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCartItems } from '../Redux/Actions/CartActions'
import { searchItem } from '../Redux/Actions/HomeSearchAction'

export default HeaderSearch = () => {
  const [text, setText] = useState('');
  const searchState = useSelector(state => state.search);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(emptyCartItems());
  };
  const searchProduct = title => {
    dispatch(searchItem(title));
  };

  return (
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
            searchProduct(newText);
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
  )
}

const styles = StyleSheet.create({
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
})
