import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import ProductData from './ProjectData/ProductsImage/ProductData';
import { ScrollView } from 'react-native-gesture-handler';
import CartItems from './CartItems';

const Add2Cart = createBottomTabNavigator();
let index = 1;

const Cart = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartContainer}>
        <CartItems />
        <CartItems />
        <CartItems />
      </ScrollView>
      <View style={styles.billContainer}>
        <Text>Bill</Text>
      </View>
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
          backgroundColor: 'darkorange',
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
      <Add2Cart.Screen name="Cart" component={Cart} options={{
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
    marginTop: RFValue(10),
    backgroundColor: 'grey',
    paddingVertical: RFValue(2),
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 20,
  },

  billContainer: {
    // flex: 1,
    marginTop: RFValue(6),
    justifyContent: 'center',
    paddingVertical: RFValue(50),
    backgroundColor: 'white',
    alignItems: 'center',
    width: Dimensions.get('window').width - 20,
  },
  checkout: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: RFValue(50),
    width: Dimensions.get('window').width - 20,
    top: Platform.OS === 'ios' ? RFValue(13) : null,
    height: RFValue(60),
  },
  navTxt: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16),
    // paddingVertical: RFValue(5),
  },

})
