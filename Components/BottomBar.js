import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Menus = [
  {
    id: 1,
    name: 'Home',
    src: require('../Components/ProjectData/Logo/Home.png'),
    stat: true,
  },
  {
    id: 2,
    name: 'Search',
    src: require('../Components/ProjectData/Logo/Search.png'),
    stat: false,
  },
  {
    id: 3,
    name: 'Cart',
    src: require('../Components/ProjectData/Logo/Shopping-Cart.png'),
    stat: false,
  },
  {
    id: 4,
    name: 'Profile',
    src: require('../Components/ProjectData/Logo/Profile.png'),
    stat: false,
  },
]


const BottomBar = () => {
  const [selectedId, setSelectedId] = useState(false);
  const [current, setCurrent] = useState(false);
  const active = true, inactive = false;

  const Active = (stat, id) => {
    if(stat){
      bgColor = current ? 'darkorange' : null;
    }
    return
  }

  return (
    <View style={styles.container}>
      {
        Menus.map((item) => (
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              Active(item.stat, item.id)
            }}>
            <Image source={item.src}
              style={styles.menuIcon}
            />
          </TouchableOpacity>

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
  btn:{
    // backgroundColor: 'darkorange',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(15),
    borderRadius: RFValue(50),
    margin: RFValue(7),
  }
})
