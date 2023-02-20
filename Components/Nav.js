import * as React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MyCart from './MyCart';
import { RFValue } from 'react-native-responsive-fontsize';
import Search from './Search';
import Profile from './Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './ProductDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Home"
        component={Nav}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: true, headerBackTitleVisible: false }}
      />
      {/* <Stack.Screen
          name="My Cart"
          component={MyCart}
          options={{ headerBackTitleVisible: false }}
        /> */}
    </Stack.Navigator>
  );
};

const Nav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          marginHorizontal: RFValue(10),
          paddingHorizontal: RFValue(5),
          marginBottom: RFValue(10),
          backgroundColor: 'black',
          borderRadius: RFValue(45),
          height: RFValue(75),
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={[styles.iconContainer, { backgroundColor: focused ? 'darkorange' : null }]}>
            <Image
              source={require('../Components/ProjectData/Logo/Home.png')}
              resizeMode='contain'
              style={styles.iconImg}
            />
          </View>
        )
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <View style={[styles.iconContainer, { backgroundColor: focused ? 'darkorange' : null }]}>
            <Image
              source={require('../Components/ProjectData/Logo/Search.png')}
              resizeMode='contain'
              style={styles.iconImg}
            />
          </View>
        )
      }} />
      <Tab.Screen name="Cart" component={MyCart} options={{
        tabBarIcon: ({ focused }) => (
          <View style={[styles.iconContainer, { backgroundColor: focused ? 'darkorange' : null }]}>
            <Image
              source={require('../Components/ProjectData/Logo/Cart.png')}
              resizeMode='contain'
              style={styles.iconImg}
            />
          </View>
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <View style={[styles.iconContainer, { backgroundColor: focused ? 'darkorange' : null }]}>
            <Image
              source={require('../Components/ProjectData/Logo/Profile.png')}
              resizeMode='contain'
              style={styles.iconImg}
            />
          </View>
        )
      }} />
    </Tab.Navigator>
  );
};


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: RFValue(10),
  },
  iconImg: {
    width: RFValue(20),
    height: RFValue(20),
    tintColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Platform.OS === 'ios' ? RFValue(27) : RFValue(28),
    paddingVertical: Platform.OS === 'ios' ? RFValue(26) : RFValue(22),
    borderRadius: RFValue(50),
    margin: RFValue(7),
    top: Platform.OS === 'ios' ? RFValue(13) : null,
  },
})
