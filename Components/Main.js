import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomBar from './BottomBar'
import Cart from './Cart'
import Categories from './Categories'
import NewSeasonsEss from './NewSeasonsEss'
import Product from './Product'
import ProductDetails from './ProductDetails'
import TopSearchBar from './TopSearchBar'

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.TopSearchBar}>
                    <TopSearchBar />
                </View>
                <View style={styles.NewSeasonsEss}>
                    <NewSeasonsEss />
                </View>
                <View style={styles.Categories}>
                    <Categories />
                </View>
                <View style={styles.Product}>
                    <Product />
                </View>
                <View style={styles.BottomBar}>
                    <BottomBar />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    TopSearchBar: {

    },
    NewSeasonsEss: {
    },
    Categories: {
    },
    Product: {
    },
    BottomBar: {
    },
})
