import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Home from './Components/Home'
import Nav from './Components/Nav'
import MyCart from './Components/MyCart'


const App = () => {
  return (
    <View style={styles.container}>
      <MyCart />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? RFValue(50) : RFValue(10),
    height: RFValue(Dimensions.get('screen').height - 50),
    backgroundColor: 'white',
  }
})
