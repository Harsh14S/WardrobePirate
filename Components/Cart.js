import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import CartItems from './CartItems';
import Bill from './CartBill';

const Add2Cart = createBottomTabNavigator();
let index = 1;

const Cart = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cartContainer}>
          <CartItems />
          <CartItems />
          <CartItems />
        </View>
        <View style={styles.billContainer}>
          <Bill />
          {/* <Text>Bill</Text> */}
        </View>
        <View style={styles.empty} />
      </ScrollView>
    </View>
  )
};

export default Checkout = ({ route }) => {
  index = route.params.index;
  return (
    <Add2Cart.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          marginTop: RFValue(20),
          marginBottom: RFValue(10),
          marginHorizontal: RFValue(10),
          paddingHorizontal: RFValue(5),
          borderRadius: RFValue(45),
          height: RFValue(61),
        },
      }}
    >
      <Add2Cart.Screen name="My Cart" component={Cart} options={{
        tabBarIcon: () => (
          <Pressable
            style={styles.checkout}
            onPress={() => Alert.alert("Hello")}
          >
            <Text style={styles.navTxt}>Checkout</Text>
          </Pressable>
        )
      }} />
    </Add2Cart.Navigator>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartContainer: {
    flex: 1,
    marginTop: RFValue(10),
    // backgroundColor: 'grey',
    paddingVertical: RFValue(2),
    width: Dimensions.get('window').width - 20,
    // height: Dimensions.get('window').height / 2 - 55,
  },

  billContainer: {
    flex: 1,
    marginTop: RFValue(50),
    // paddingVertical: RFValue(50),
    // backgroundColor: 'white',
    width: Dimensions.get('window').width - 20,
    // height: Dimensions.get('window').height / 2 - 150,
  },
  checkout: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange',
    borderRadius: RFValue(50),
    width: Dimensions.get('window').width - 20,
    top: Platform.OS === 'ios' ? RFValue(13) : null,
    height: RFValue(62),
  },
  navTxt: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16),
    // paddingVertical: RFValue(5),
  },
  empty: {
    // backgroundColor: "white",
    padding: RFValue(40),
  },
})
