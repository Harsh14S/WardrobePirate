import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './Components/Main'
import { RFValue } from 'react-native-responsive-fontsize'


const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: RFValue(50),
    height: RFValue(Dimensions.get('screen').height - 50),
    backgroundColor: 'white',
  }
})
