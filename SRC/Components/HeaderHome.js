import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Users from '../ProjectData/UsersData/UserProfile';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

// DC Tshirt with Round Neck

export default HeaderHome = () => {
  const [bool, setBool] = useState(true);
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      {bool ? (
        <View
          style={styles.profileContainer}>
          <Image
            source={Users[0].img}
            style={styles.profileImg}
          />
          <View>
            <Text
              style={styles.profileNameTxt}>
              Hello, {Users[0].name}!
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 0.92,
            marginRight: RFValue(5),
            backgroundColor: 'rgb(240, 240, 240)',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: RFValue(50),
            paddingVertical: RFPercentage(1.5),

          }}>
          <TextInput
            placeholder="Search"
            style={{
              flex: 1,
              fontSize: RFValue(15),
              color: 'black',
              paddingLeft: RFPercentage(3),
              paddingRight: RFPercentage(1),
              paddingVertical: RFPercentage(0.2),
            }}
            onChangeText={newText => {
              setText(newText);
            }}
          />
        </View>
      )}
      <Pressable
        style={styles.searchBtnContainer}
        onPress={() => setBool(!bool)}>
        <Image
          source={require('../ProjectData/Logo/Search.png')}
          resizeMode="contain"
          style={styles.searchBtnImg}
        />
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RFPercentage(1.4),
    marginHorizontal: RFPercentage(1.7),
  },
  profileContainer: {
    flex: 0.92,
    marginRight: RFValue(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFValue(50),

  },
  profileImg: {
    borderRadius: RFValue(40),
    height: RFPercentage(6),
    width: RFPercentage(6),
  },
  profileNameTxt: {
    color: 'black',
    fontSize: RFValue(18),
    marginLeft: RFValue(10),
    fontWeight: '600',
  },
  searchBtnContainer: {
    flex: 0.08,
    backgroundColor: 'rgb(240, 240, 240)',
    alignItems: 'center',
    padding: RFPercentage(1.5),
    borderRadius: RFPercentage(5),
  },
  searchBtnImg: {
    height: RFValue(22),
    width: RFValue(22),
  },
});
