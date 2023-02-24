import * as React from 'react';
import { StyleSheet, View, Image, Platform, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MyCart from './MyCart';
import Cart from './Cart';
import { RFValue } from 'react-native-responsive-fontsize';
import Search from './Search';
import Profile from './Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductDetailsNav from './ProductDetails';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const items = useSelector(state => state)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Nav"
        component={Nav}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsNav}
        options={{
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={styles.favBtn}
              onPress={() => Alert.alert("Added To Your WishList")}
            >
              <Image
                source={require('../ProjectData/Logo/Favorite.png')}
                style={styles.favImg}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.favBtn}
              onPress={() => Alert.alert("Settings")}
            >
              <Image
                source={require('../ProjectData/Logo/Dots.png')}
                style={styles.favImg}
              />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  );
};

const Nav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarShowLabel": false,
        headerShown: false,
        tabBarStyle: {
          "display": "flex",
          backgroundColor: 'black',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
          margin: RFValue(10),
          paddingHorizontal: RFValue(5),
          marginBottom: RFValue(10),
          borderRadius: RFValue(45),
          height: RFValue(75),
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={[styles.iconContainer, { backgroundColor: focused ? 'darkorange' : null }]}>
            <Image
              source={require('../ProjectData/Logo/Home.png')}
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
              source={require('../ProjectData/Logo/Search.png')}
              resizeMode='contain'
              style={styles.iconImg}
            />
          </View>
        )
      }} />
      <Tab.Screen name="Cart" component={MyCart} options={{
        // tabBarBadge: items.length,
        tabBarIcon: ({ focused }) => (
          <View style={[styles.iconContainer, { backgroundColor: focused ? 'darkorange' : null }]}>
            <Image
              source={require('../ProjectData/Logo/Cart.png')}
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
              source={require('../ProjectData/Logo/Profile.png')}
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
  favBtn: {
    borderRadius: RFValue(20),
    marginRight: RFValue(10),
  },
  favImg: {
    tintColor: 'black',
    width: RFValue(25),
    height: RFValue(25),
  },
})