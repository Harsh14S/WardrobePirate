import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories';
import NewSeasonsEss from './NewSeasonsEss';
import HeaderHome from './HeaderHome';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { addToWishlist } from '../Redux/Actions/WishlistActions';
import Product from './Product';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const wishState = useSelector(state => state.wish);
  const addItemToWishlist = item => {
    dispatch(addToWishlist(item));
  };
  return (
    <View style={styles.container}>
      <HeaderHome />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <NewSeasonsEss />
        <Categories />
        <Product navigation={navigation} style={styles.Product} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: RFPercentage(2),
    // marginHorizontal: RFPercentage(1.7),

  },
});
