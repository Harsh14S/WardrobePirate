import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useSelector } from 'react-redux'

export default HeaderWishlist = () => {
  const wishState = useSelector(state => state.wish);
  return (
    <View style={styles.TopSearchBar}>
      <View
        style={styles.headerHeading}>
        <Text style={styles.headerTitleTxt}>Wishlist</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TopSearchBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1.8),
  },
  headerHeading: {
    flex: 1,
    marginHorizontal: RFValue(5),
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(50),
    paddingVertical: RFPercentage(1.5),
  },
  headerTitleTxt: {
    color: 'black',
    fontSize: RFValue(18),
    marginLeft: RFValue(10),
    fontWeight: '600',
  },
  searchTextInput: {
    flex: 1,
    fontSize: RFValue(15),
    color: 'black',
    paddingLeft: RFPercentage(3),
    paddingRight: RFPercentage(1),
    paddingVertical: RFPercentage(0.2),
  },
  headerBtnContainer: {
    flex: 0.08,
    backgroundColor: 'rgb(240, 240, 240)',
    alignItems: 'center',
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(5),
  },
  searchBtnImg: {
    height: RFPercentage(3.3),
    width: RFPercentage(3.3),
  },
})
