import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Users from './ProjectData/UsersData/UserProfile';
import { RFValue } from 'react-native-responsive-fontsize';

const TopSearchBar = () => {
  return (
    <View style={styles.container}>

      <View style={styles.circle}>
        <Image
          source={Users[0].img} resizeMode="contain"
          style={styles.img}
        />
      </View>

      <View style={styles.name}>
        <Text style={styles.text}>Hello, {Users[0].name}!</Text>
      </View>

      <View style={styles.search}>
        <Image
          source={require('../Components/ProjectData/Logo/Search.png')} resizeMode="contain"
          style={styles.logo}
        />
      </View>
    </View>
  )
}

export default TopSearchBar


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RFValue(5),
    width: RFValue(40),
    borderRadius: RFValue(25),
    overflow: 'hidden',
  },
  img: {
    justifyContent: 'center',
    height: RFValue(40),
    width: RFValue(70),
    borderRadius: RFValue(25),
  },
  name: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
  },
  search: {
    marginRight: RFValue(5),
    height: RFValue(40),
    width: RFValue(40),
    borderRadius: RFValue(25),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: RFValue(25),
    width: RFValue(25),
  },
});
