import { Alert, FlatList, Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Menus = [
  {
    id: 1,
    name: 'Home',
    src: require('./ProjectData/Logo/Home.png'),
  },
  {
    id: 2,
    name: 'Search',
    src: require('./ProjectData/Logo/Search.png'),
  },
  {
    id: 3,
    name: 'Cart',
    src: require('./ProjectData/Logo/Shopping-Cart.png'),
  },
  {
    id: 4,
    name: 'Profile',
    src: require('./ProjectData/Logo/Profile.png'),
  },
]


const BottomBar = () => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <View style={styles.container}>
      {
        Menus.map((item, index) => (

          <Pressable
            key={index}
            style={[styles.btn, { backgroundColor: (index === selectedId) ? 'darkorange' : null }]}
            onPress={() => setSelectedId(index)}>
            <Image source={item.src}
              style={styles.menuIcon}
            />
          </Pressable>
        ))
      }
    </View>
  )
};

export default BottomBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: RFValue(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(10),
    // paddingVertical: RFValue(10),
    // paddingHorizontal: RFValue(25),
  },
  menuIcon: {
    width: RFValue(20),
    height: RFValue(20),
    tintColor: 'white',
  },
  btn: {
    // backgroundColor: 'darkorange',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(17),
    borderRadius: RFValue(50),
    margin: RFValue(7),
  }
})
