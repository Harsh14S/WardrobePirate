import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const ImgArr = [
  {
    id: 1,
    img: require('../Components/ProjectData/ProductsImage/Tshirt.jpg'),
    price: 25,
    colors: ['skyblue', 'tan', 'grey'],
  },
  {
    id: 2,
    img: require('../Components/ProjectData/ProductsImage/Tshirt2.jpeg'),
    price: 30,
    colors: ['skyblue', 'tan', 'grey'],
  },
  {
    id: 3,
    img: require('../Components/ProjectData/ProductsImage/Tshirt3.jpg'),
    price: 5,
    colors: ['skyblue', 'tan', 'grey'],
  },
  {
    id: 4,
    img: require('../Components/ProjectData/ProductsImage/Pants1.jpg'),
    price: 18,
    colors: ['skyblue', 'tan', 'grey'],
  },
  {
    id: 5,
    img: require('../Components/ProjectData/ProductsImage/Formal.jpg'),
    price: 49,
    colors: ['skyblue', 'tan', 'grey'],
  },
  {
    id: 6,
    img: require('../Components/ProjectData/ProductsImage/Casual.jpg'),
    price: 42,
    colors: ['skyblue', 'tan', 'grey'],
  },
]



const Items = () => {
  return (
    <View style={styles.container}>
      {
        ImgArr.map((item) => (
          <View style={styles.proContainer}>
            <View style={styles.productView}>
              <View style={styles.imgContainer}>
                <Image
                  source={item.img}
                  style={styles.img}
                />
              </View>
              <TouchableOpacity
                style={styles.favBtn}
                onPress={() => Alert.alert('Added to your wishlist')}
                activeOpacity={0.7}
              >
                <Image
                  source={require('../Components/ProjectData/Logo/Favorite.png')}
                  style={styles.favImg}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt}>Crew Neck Half Sleeve T-Shirt</Text>
            <View style={styles.btmContainer}>
              <Text style={styles.priceTag}> ${item.price}</Text>
              <View style={styles.tilesContainer}>
                {
                  item.colors.map((clr) => (
                    <View style={[styles.clrTiles, { backgroundColor: clr }]}></View>
                  ))
                }
              </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default Items

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  proContainer: {
    width: RFValue(155),
    marginBottom: RFValue(6),
  },
  productView: {
    margin: RFValue(2),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imgContainer: {
    overflow: 'hidden',
    width: RFValue(190),
    borderRadius: RFValue(40),
  },
  img: {
    height: RFValue(180),
    borderRadius: RFValue(36),
    width: RFValue(190),
    marginLeft: RFValue(35),
  },
  favImg: {
    width: RFValue(20),
    height: RFValue(20),
  },
  favBtn: {
    backgroundColor: 'darkorange',
    height: RFValue(30),
    borderRadius: RFValue(20),
    paddingHorizontal: RFValue(12),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginTop: RFValue(3),
    fontSize: RFValue(13),
  },
  btmContainer: {
    marginTop: RFValue(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: RFValue(5),
  },
  priceTag: {
    fontSize: RFValue(14),
  },
  tilesContainer: {
    flexDirection: 'row',
    marginHorizontal: RFValue(5),
  },
  clrTiles: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: RFValue(2.5),
  }
})
