import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Add2Cart = createBottomTabNavigator();
let index = 0;

export default Checkout = ({ navigation }) => {
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
          height: RFValue(75),
          shadowColor: 'white',
          shadowOffset: {
            height: RFValue(0),
            width: RFValue(0),
          },
          shadowOpacity: RFValue(1),
          shadowRadius: RFValue(20),
          opacity: RFValue(1),
          elevation: RFValue(1),
        },
      }}
    >
      <Add2Cart.Screen name="Cart" component={Cart} options={{
        tabBarIcon: () => (
          <Pressable
            style={styles.iconContainer}
            onPress={() => { }}
          >
            <Text style={styles.navTxt}>Add To Cart</Text>
          </Pressable>
        )
      }} />
    </Add2Cart.Navigator>
  )
}

const Cart = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange',
    borderRadius: RFValue(50),
    height: RFValue(62),
    paddingHorizontal: RFValue(45),
  },
  navTxt: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(16)
  },
})
