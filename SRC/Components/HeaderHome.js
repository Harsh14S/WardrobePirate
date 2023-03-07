import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Users from '../ProjectData/UsersData/UserProfile';
import { RFValue } from 'react-native-responsive-fontsize';

// DC Tshirt with Round Neck

const HeaderHome = () => {
  const [bool, setBool] = useState(false);
  const [text, setText] = useState('Search');
  return (
    <View style={styles.container}>

      {bool ? (<View style={{ flex: 1, flexDirection: 'row', padding: RFValue(2), marginRight: RFValue(5) }}>
        <TextInput
          style={{ flex: 1, backgroundColor: 'lightgrey', paddingHorizontal: RFValue(6), fontSize: RFValue(16), color: 'grey' }}
          placeholder="Search"
          onChangeText={(newText) => setText(newText)}
        />
      </View>) :
        (<View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'lightgrey' }}>
          <View style={styles.circle}>
            <Image
              source={Users[0].img} resizeMode="contain"
              style={styles.img}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.text}>Hello, {Users[0].name}!</Text>
          </View>
        </View>)}

      <Pressable style={styles.search}
        onPress={() => setBool(!bool)}
      >
        <Image
          source={require('../ProjectData/Logo/Search.png')} resizeMode="contain"
          style={styles.logo}
        />
      </Pressable>
    </View>
  )
}

export default HeaderHome


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: RFValue(1),
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
    // flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: RFValue(18),
    marginLeft: RFValue(10),
    fontWeight: '600',

  },
  search: {
    backgroundColor: 'lightgrey',
    height: RFValue(40),
    width: RFValue(40),
    // borderRadius: RFValue(25),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: RFValue(25),
    width: RFValue(25),
  },
});
