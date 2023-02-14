import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';


const Categories = () => {
  const [currentActive, setCurrentActive] = useState(true);
  let backgroundColor = currentActive ? 'black' : 'white';
  let color = currentActive ? 'white' : 'black';

  const onPress = () => {
    if(currentActive){
      setCurrentActive(!currentActive);
    } else {
      setCurrentActive(!currentActive);
    }
  }

  return (
    <ScrollView style={styles.container} horizontal={true}>
      <TouchableOpacity
      style={[styles.btn, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
        <Text style={[styles.title, {color: color}]}>Top</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.btn, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
        <Text style={[styles.title, {color: color}]}>Men</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.btn, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
        <Text style={[styles.title, {color: color}]}>Women</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={[styles.btn, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
        <Text style={[styles.title, {color: color}]}>Kids</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(4),
    marginHorizontal: RFValue(2),
    paddingHorizontal: RFValue(29),
    borderRadius: RFValue(25),
    borderWidth: 0.2,
  },
  title: {
    // color: (currentActive ? 'white': 'black'),
    fontSize: RFValue(13),
  },
  list: {

  }
})
