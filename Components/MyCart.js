import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const MyCart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <Text>Cart</Text>
            </View>
            <View style={styles.billContainer}>
                <Text>Bill</Text>
            </View>
        </View>
    )
};

export default MyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    topBar: {
        // flex: 1,
        flexDirection: 'row',
        top: RFValue(10),
        justifyContent: 'space-between',
        paddingVertical: RFValue(40),
        backgroundColor: 'white',
        alignItems: 'center',
        width: '95%'
    },
    cartContainer: {
        // flex: 1,
        justifyContent: 'center',
        paddingVertical: RFValue(50),
        backgroundColor: 'white',
        alignItems: 'center',
        width: '95%'
    },
    billContainer: {
        // flex: 1,
        justifyContent: 'center',
        paddingVertical: RFValue(50),
        backgroundColor: 'white',
        alignItems: 'center',
        width: '95%',
    },
})
