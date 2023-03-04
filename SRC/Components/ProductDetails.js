import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native-gesture-handler';
import RatingBar from './RatingBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import HeaderProductDetails from './HeaderProductDetails';
import {addIntoCart} from '../Redux/Actions/CartActions';

let item = {};
const Add2Cart = createBottomTabNavigator();

const ProductDetailsNav = ({navigation, route}) => {
  item = route.params.item;

  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addItemIntoCart = item => {
    dispatch(addIntoCart(item));
  };

  const [quant, setQuant] = useState(1);
  return (
    <Add2Cart.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabNav,
      }}>
      <Add2Cart.Screen
        name="ProductDetail"
        component={ProductDetails}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabBarContainer}>
              <View style={styles.intractionContainer}>
                <Pressable
                  style={styles.plusminuscontainer}
                  onPress={() => {
                    quant >= 2 ? setQuant(quant - 1) : null;
                  }}>
                  <Image
                    source={require('../ProjectData/Logo/Minus.png')}
                    style={styles.plusminus}
                  />
                </Pressable>
                <View style={styles.plusminuscontainer}>
                  <Text style={styles.navTxt}>{quant}</Text>
                </View>
                <Pressable
                  style={styles.plusminuscontainer}
                  onPress={() => {
                    quant <= 9 ? setQuant(quant + 1) : null;
                  }}>
                  <Image
                    source={require('../ProjectData/Logo/Plus.png')}
                    style={styles.plusminus}
                  />
                </Pressable>
              </View>
              <Pressable
                style={styles.iconContainer}
                onPress={() => {
                  navigation.navigate('CheckoutCart', {
                    // quantity: quant,
                  });
                  // console.log('Quant: ', quant);
                  // console.log('Before item.quantity: ', item.quantity);
                  // if (
                  //   item.quantity + quant <= 10 ||
                  //   item.quantity - quant >= 1
                  // ) {
                  //   item.quantity += quant;
                  //   addItemIntoCart(item);
                  // }
                  addItemIntoCart(item);
                  item.quantity = quant;
                  // console.log('After item.quantity: ', item.quantity);
                }}>
                <Text style={styles.navTxt}>Add To Cart</Text>
              </Pressable>
            </View>
          ),
        }}
      />
    </Add2Cart.Navigator>
  );
};

const ProductDetails = ({navigation}) => {
  // const cartState = useSelector(state => state.cart);
  const [selectedId, setSelectedId] = useState(0);
  // console.log("item: ", item);
  return (
    <View style={styles.Container}>
      <HeaderProductDetails navigation={navigation} item={item} />
      <ScrollView
        style={{flex: 1, marginTop: RFValue(10)}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.productViewCenter}>
          <View style={styles.productView}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>${item.price}</Text>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.productName}>{item.title}</Text>
          </View>
          <View style={styles.productRating}>
            <View
              style={{
                width: Dimensions.get('window').width - 35,
                flexDirection: 'row',
              }}>
              <RatingBar />
              <Text style={styles.ratingText}>50+ reviews</Text>
            </View>
          </View>
          <View style={styles.productSize}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {item.size.map((item, index) => (
                <Pressable
                  style={[
                    styles.btn,
                    {backgroundColor: selectedId === index ? 'black' : 'white'},
                  ]}
                  onPress={() => {
                    setSelectedId(index);
                  }}
                  key={index}>
                  <Text
                    style={[
                      styles.sizeTitle,
                      {color: selectedId === index ? 'white' : 'black'},
                    ]}>
                    {item}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View style={styles.productDescContainer}>
            <Text style={styles.productDescTitle}>Description</Text>
            <Text style={styles.productDesc}>{item.details}</Text>
          </View>
          <View style={styles.empty} />
        </View>
        {/* <BottomBar /> */}
      </ScrollView>
    </View>
  );
};

export default ProductDetailsNav;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: RFValue(5),
    // marginTop: RFValue(5),
  },
  tabNav: {
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
  productViewCenter: {
    alignItems: 'center',
  },
  productView: {
    borderRadius: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: RFValue(350),
    width: Dimensions.get('window').width - 30,
    borderRadius: RFValue(36),
  },
  priceTag: {
    color: 'white',
    fontSize: RFValue(23),
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(5),
  },
  priceTagContainer: {
    backgroundColor: 'black',
    borderRadius: RFValue(100),
    // paddingHorizontal: RFValue(12),
    width: Dimensions.get('window').width - 290,
    paddingVertical: RFValue(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: RFValue(0),
    right: RFValue(0),
  },
  nameContainer: {
    marginTop: RFValue(8),
    marginBottom: RFValue(5),
    width: Dimensions.get('window').width - 35,
  },
  productName: {
    fontSize: RFValue(25),
    fontWeight: '500',
    color: 'black',
  },
  productRating: {
    // backgroundColor: 'yellow',
    marginVertical: RFValue(5),
  },
  ratingText: {
    marginHorizontal: RFValue(8),
  },
  productSize: {
    flexDirection: 'row',
    marginVertical: RFValue(10),
  },
  sizeTitle: {
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(4),
    marginHorizontal: RFValue(5),
    paddingHorizontal: RFValue(17),
    paddingVertical: RFValue(12),
    marginVertical: RFValue(2),
    borderRadius: RFValue(12),
    // elevation: RFValue(1),
    // shadowColor: 'black',
    // shadowOffset: {
    //   height: RFValue(1),
    //   // width: RFValue(0),
    // },
    // shadowRadius: RFValue(2),
    // shadowOpacity: 0.2,
  },
  title: {
    fontSize: RFValue(15),
    color: 'black',
  },
  productDescContainer: {
    color: 'black',
    width: '90%',
    justifyContent: 'center',
  },
  productDescTitle: {
    fontWeight: '600',
    fontSize: RFValue(13),
    marginTop: RFValue(7),
  },
  productDesc: {
    marginTop: RFValue(12),
    fontSize: RFValue(13),
    textAlign: 'justify',
    marginBottom: RFValue(25),
  },
  tabBarContainer: {
    flexDirection: 'row',
    // backgroundColor: 'skyblue',
    top: Platform.OS === 'ios' ? RFValue(13) : null,
    width: Dimensions.get('window').width - 40,
    justifyContent: 'space-between',
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
    fontSize: RFValue(16),
  },
  intractionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: RFValue(10),
  },
  plusminus: {
    tintColor: 'white',
    height: RFValue(26),
    width: RFValue(26),
  },
  plusminuscontainer: {
    marginHorizontal: RFValue(4),
    width: RFValue(28),
  },
  empty: {
    padding: RFValue(43),
  },
});
