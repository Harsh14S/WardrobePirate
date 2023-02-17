import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const MyCart = () => {
    return (
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    )
};

export default MyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
