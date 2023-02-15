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
            </ScrollView>
            <View style={styles.BottomBar}>
                <BottomBar />
            </View>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: RFValue(10),
    },
    TopSearchBar: {
        width: '100%',
        marginVertical: RFValue(10),
        height: RFValue(40),
        justifyContent: 'center',
    },
    inContainer: {
        flex: 1,
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
        margin: RFValue(2),
        marginTop: RFValue(10),
    },
    BottomBar: {
        // backgroundColor: 'black',
        width: '98%',
        borderRadius: RFValue(50),
        marginBottom: RFValue(20),
        position: 'absolute',
        margin: 20,
    },
});
