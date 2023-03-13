import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';
import HeaderCart from './HeaderCart';
const Add2Cart = createBottomTabNavigator();

export const CheckoutCart = () => {
  return (
    <Add2Cart.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabContainer,
      }}>
      <Add2Cart.Screen
        name="MyCart"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Pressable
              style={styles.checkout}
              onPress={() => Alert.alert('Hello')}>
              <Text style={styles.navTxt}>Checkout</Text>
            </Pressable>
          ),
        }}
      />
    </Add2Cart.Navigator>
  );
};

const Cart = ({ navigation }) => {
  const cartState = useSelector(state => state.cart);
  return (
    <View style={styles.container}>
      <HeaderCart navigation={navigation} />
      <View style={styles.cartContainer}>
        <CartItems />
      </View>
      <View style={styles.empty} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: RFPercentage(11),
  },
  tabContainer: {
    display: 'flex',
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
  cartContainer: {
    flex: 2,
    paddingVertical: RFValue(2),
  },

  billContainer: {
    backgroundColor: 'grey',
    marginTop: RFValue(5),
    width: Dimensions.get('window').width - 20,
  },
  checkout: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(253, 110, 0)',
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
  },
});
