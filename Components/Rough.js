import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import ProductDetails from './ProductDetails';
import Product from './Product';
import ProductData from './ProjectData/ProductsImage/ProductData'
import MyCart from './MyCart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title='Go to Details' onPress={() => navigation.navigate('Product')} />
//     </View>
//   )
// }
const Rough = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Product'>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerBackTitleVisible: false }}
        />
        {/* <Stack.Screen
          name="My Cart"
          component={MyCart}
          options={{ headerBackTitleVisible: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rough;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: RFValue(10),
  },
  Product: {
    marginTop: RFValue(10),
  },
  img: {
    height: RFValue(180),
    borderRadius: RFValue(36),
    width: RFValue(190),
    marginLeft: RFValue(35),
  },
  empty: {
    padding: RFValue(43),
  },
});
