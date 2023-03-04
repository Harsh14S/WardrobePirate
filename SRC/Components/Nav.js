import {StyleSheet, View, Image, Platform, Alert, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {Checkout, Cart} from './Cart';
import {RFValue} from 'react-native-responsive-fontsize';
import Search from './Search';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProductDetailsNav from './ProductDetails';
import {useSelector} from 'react-redux';
import MyCart from './MyCart';
import Wishlist from './Wishlist';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const wishState = useSelector(state => state.wish);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: RFValue(18),
        },
      }}>
      <Stack.Screen
        name="Nav"
        component={Nav}
        // options={{
        //   headerShown: false,
        //   headerBackTitleVisible: false,
        //   headerShadowVisible: false,
        // }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsNav}
        options={{
          title: 'Product Details',
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={styles.favBtn}
              onPress={() => {
                // Alert.alert('Added To Your WishList');
                console.log('WishState in ProductDetatils: ', wishState);
              }}>
              <Image
                source={require('../ProjectData/Logo/Favorite.png')}
                style={styles.favImg}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CheckoutCart"
        component={Checkout}
        options={{
          // headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              style={styles.favBtn}
              onPress={() => Alert.alert('Settings')}>
              <Image
                source={require('../ProjectData/Logo/Dots.png')}
                style={styles.favImg}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Nav = () => {
  const items = useSelector(state => state.wish);
  // console.log("State Items in Nav: ", items.length);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: RFValue(18),
        },
        // headerShown: false,
        tabBarStyle: {
          display: 'flex',
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
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? 'darkorange' : null},
              ]}>
              <Image
                source={require('../ProjectData/Logo/Home.png')}
                resizeMode="contain"
                style={styles.iconImg}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? 'darkorange' : null},
              ]}>
              <Image
                source={require('../ProjectData/Logo/Search.png')}
                resizeMode="contain"
                style={styles.iconImg}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Cart"
        component={MyCart}
        options={{
          // "tabBarShowLabel": true,
          // tabBarBadge: items.length,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? 'darkorange' : null},
              ]}>
              <Image
                source={require('../ProjectData/Logo/Cart.png')}
                resizeMode="contain"
                style={styles.iconImg}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          // tabBarBadge: items.length,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? 'darkorange' : null},
              ]}>
              <Image
                source={require('../ProjectData/Logo/Favorite.png')}
                resizeMode="contain"
                style={styles.iconImg}
              />

              {items.length === 0 ? null : (
                <View style={styles.badgeContainer}>
                  <Text
                    style={[
                      styles.badgeTxt,
                      {color: focused ? 'darkorange' : 'black'},
                    ]}>
                    {items.length}
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  iconImg: {
    width: RFValue(23),
    height: RFValue(23),
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
  badgeContainer: {
    backgroundColor: 'white',
    width: RFValue(17),
    height: RFValue(17),
    borderRadius: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: RFValue(8),
    right: RFValue(13),
  },
  badgeTxt: {
    color: 'darkorange',
    fontWeight: '600',
    fontSize: RFValue(10),
  },
});
