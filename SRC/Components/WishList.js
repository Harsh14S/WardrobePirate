import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import ProductData from '../ProjectData/ProductsImage/ProductData';
import { removeItemFromWishlist } from '../Redux/Actions/Actions';

const WishList = () => {
    const items = useSelector(state => state);
    // console.log(typeof (items))
    const dispatch = useDispatch();
    const removeItem = index => {
        dispatch(removeItemFromWishlist(index));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <View style={styles.imgContainer}>
                                <Image source={ProductData[item].img} style={styles.img} />
                            </View>
                            <View style={styles.itemDetails}>
                                <View style={styles.itemTitle}>
                                    <Text style={styles.itemTitleTxt}>
                                        {ProductData[item].title}
                                    </Text>
                                </View>
                                <View style={styles.itemCateg}>
                                    <Text style={styles.itemCategTxt}>
                                        {ProductData[item].categ}
                                    </Text>
                                </View>
                                <View style={styles.priceQuantity}>
                                    <Text style={styles.itemPrice}>
                                        ${ProductData[item].price}
                                    </Text>
                                    <View style={styles.intractionContainer}>
                                        <Pressable
                                            style={styles.plusminuscontainer}
                                            onPress={() => {
                                                removeItem(index);
                                                // console.log(index)
                                            }}>
                                            <Image
                                                source={require('../ProjectData/Logo/Bin.png')}
                                                style={styles.bin}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default WishList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: RFValue(5),
        paddingHorizontal: RFValue(10),
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'skyblue',
    },
    imgContainer: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: RFValue(5),
    },
    img: {
        height: RFValue(85),
        width: RFValue(85),
        borderRadius: RFValue(20),
    },
    itemDetails: {
        flex: 1,
        padding: RFValue(5),
    },
    itemTitle: {
        flex: 1,
    },
    itemTitleTxt: {
        // flex: 1,
        color: 'black',
        fontSize: RFValue(14),
        fontWeight: '600',
    },
    itemCateg: {
        flex: 1,
    },
    itemCategTxt: {
        color: 'grey',
        fontSize: RFValue(11),
    },
    priceQuantity: {
        // backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemPrice: {
        color: 'black',
        fontSize: RFValue(15),
        fontWeight: '600',
    },
    intractionContainer: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginRight: RFValue(50),
    },
    plusminus: {
        height: RFValue(26),
        width: RFValue(26),
    },
    bin: {
        height: RFValue(22),
        width: RFValue(22),
    },
    plusminuscontainer: {
        // backgroundColor: 'yellow',
        marginHorizontal: RFValue(4),
        width: RFValue(28),
    },
    itemQuantity: {
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: RFValue(16),
    },
});
