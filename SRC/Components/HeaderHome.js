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
import { useDispatch, useSelector } from 'react-redux';
import { emptySearchItem, searchItem } from '../Redux/Actions/HomeSearchAction';

// DC Tshirt with Round Neck

export default HeaderHome = () => {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(true);
  const [text, setText] = useState('');
  const searchState = useSelector(state => state.search);
  const searchProduct = title => {
    dispatch(searchItem(title));
  };
  const emptySearchArea = () => {
    dispatch(emptySearchItem());
  }
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
          style={styles.inpTxtBackContainer}>
          <Pressable
            style={styles.backBtn}
            onPress={() => {
              emptySearchArea();
              setBool(!bool);
              setText('')
            }}>
            <Image
              source={require('../ProjectData/Logo/BackArrow.png')}
              resizeMode="contain"
              style={styles.searchBtnImg}
            />
          </Pressable>
          <TextInput
            placeholder="Search"
            style={styles.searchTxtInput}
            onChangeText={newText => {
              setText(newText);
              searchProduct(newText)
            }}
          />
        </View>
      )}
      <Pressable
        style={styles.searchBtnContainer}
        onPress={() => {
          bool ? setBool(!bool) : searchProduct(text);
        }}>
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
    height: RFPercentage(3.3),
    width: RFPercentage(3.3),
  },
  inpTxtBackContainer: {
    flex: 0.92,
    marginRight: RFPercentage(1),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFPercentage(4),
  },
  backBtn: {
    borderRadius: RFPercentage(50),
    marginLeft: RFPercentage(1),
    padding: RFPercentage(1.5),
    backgroundColor: 'rgb(240, 240, 240)',
    marginRight: RFPercentage(1),
  },
  searchTxtInput: {
    flex: 1,
    fontSize: RFValue(15),
    color: 'black',
    backgroundColor: 'rgb(240, 240, 240)',
    paddingLeft: RFPercentage(2),
    paddingRight: RFPercentage(1),
    paddingVertical: RFPercentage(1.5),
    borderRadius: RFPercentage(4),
  },
});
