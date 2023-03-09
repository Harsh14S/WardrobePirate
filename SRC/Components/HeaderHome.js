import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Users from '../ProjectData/UsersData/UserProfile';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

// DC Tshirt with Round Neck

const HeaderHome = () => {
  const [bool, setBool] = useState(true);
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      {bool ? (
        <View
          style={{
            flex: 1,
            marginRight: RFValue(10),
            // backgroundColor: 'grey',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              // marginLeft: RFValue(3),
              backgroundColor: 'grey',
              borderRadius: RFValue(40),
              // overflow: 'hidden',
            }}>
            <Image
              source={Users[0].img}
              style={{
                borderRadius: RFValue(40),
                height: RFValue(40),
                width: RFValue(40),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: RFValue(18),
                marginLeft: RFValue(10),
                fontWeight: '600',
              }}>
              Hello, {Users[0].name}!
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            marginRight: RFValue(5),
            backgroundColor: 'lightgrey',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: RFValue(50),
            paddingLeft: RFValue(7),
            // marginRight: RFValue(5),
          }}>
          {/* <Text>Search</Text> */}
          <TextInput
            placeholder="Search"
            style={{
              // backgroundColor: 'orange',
              flex: 1,
              fontSize: RFValue(15),
              color: 'black',
              paddingHorizontal: RFValue(10),
            }}
            onChangeText={newText => {
              setText(newText);
            }}
          />
        </View>
      )}

      {/* <Pressable style={styles.search} onPress={() => setBool(!bool)}> */}
      <Pressable
        style={{
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          padding: RFValue(10),
          // marginRight: RFValue(5),
          borderRadius: RFValue(40),
        }}
        onPress={() => setBool(!bool)}>
        <Image
          source={require('../ProjectData/Logo/Search.png')}
          resizeMode="contain"
          style={{
            height: RFValue(22),
            width: RFValue(22),
          }}
        />
      </Pressable>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
    // padding: RFValue(1),
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
    width: RFValue(40),
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
    // backgroundColor: 'lightgrey',
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
