import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomBar from './BottomBar';
import Categories from './Categories';
import NewSeasonsEss from './NewSeasonsEss';
import Product from './Product';
import ProductDetails from './ProductDetails';
import TopSearchBar from './TopSearchBar';
import { RFValue } from 'react-native-responsive-fontsize';

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.TopSearchBar}>
                <TopSearchBar />
            </View>
            <ScrollView style={styles.inContainer}>
                <View style={styles.NewSeasonsEss}>
                    <NewSeasonsEss />
                </View>
                <View style={styles.Categories}>
                    <Categories />
                </View>
                <View style={styles.Product}>
                    <Product />
                </View>
                {/* <View style={styles.BottomBar}>
                    <BottomBar />
                </View> */}
            </ScrollView>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'grey',
    },
    TopSearchBar: {
        marginVertical: RFValue(5),
        marginHorizontal: RFValue(10),
        height: RFValue(40),
        justifyContent: 'center'
    },
    inContainer: {
        flex: 1,
        backgroundColor: 'skyblue',
        marginHorizontal: RFValue(10),
        // padding: RFValue(5),
    },
    NewSeasonsEss: {
        flex: 1,
        // backgroundColor: 'black',
        // margin: RFValue(2),
        // padding: 5,
        // height: RFValue(120),
    },
    Categories: {
        // backgroundColor: 'lightpink',
        margin: RFValue(2),
        // padding: 5,
        height: RFValue(40),
        justifyContent: 'center'
    },
    Product: {
        // backgroundColor: 'lightblue',
        margin: 2,
        height: RFValue(1000),
        // padding: 5,
    },
    BottomBar: {
        // backgroundColor: 'gold',
        margin: RFValue(2),
        // padding: 5,
    },
});
