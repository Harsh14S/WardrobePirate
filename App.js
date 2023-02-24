import { Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Nav from './SRC/Components/Nav'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Store from './SRC/Redux/Store/Store'


const App = () => {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? RFValue(40) : RFValue(10),
  }
})
