import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const Triangle = () => {
    return <View style={[styles.triangle]} />
};
const TriangleCorner = () => {
    return <View style={styles.triangleCorner} />
};

const Search = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Search</Text> */}
            {/* <TriangleCorner /> */}
        </View>
    )
};

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
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
        transform: [{ rotate: "180deg" }],
    },
})
