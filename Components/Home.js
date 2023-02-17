import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomBar from './BottomBar';
import Categories from './Categories';
import NewSeasonsEss from './NewSeasonsEss';
import Product from './Product';
import ProductDetails from './ProductDetails';
import TopSearchBar from './TopSearchBar';
import { RFValue } from 'react-native-responsive-fontsize';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TopSearchBar}>
        <TopSearchBar />
      </View>
      <ScrollView
        style={styles.inContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.NewSeasonsEss}>
          <NewSeasonsEss />
        </View>
        <View style={styles.Categories}>
          <Categories />
        </View>
        <View style={styles.Product}>
          <Product />
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
    justifyContent: 'flex-end',
    paddingHorizontal: RFValue(10),
  },
  TopSearchBar: {
    // backgroundColor: 'grey',
    width: '100%',
    marginTop: RFValue(0),
    height: RFValue(40),
    justifyContent: 'center',
  },
  inContainer: {
    flex: 1,
    borderRadius: RFValue(40)
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
    width: '98%',
    borderRadius: RFValue(50),
    marginBottom: RFValue(20),
    position: 'absolute',
    margin: 20,
  },
  empty: {
    padding: RFValue(43),
  }
});
