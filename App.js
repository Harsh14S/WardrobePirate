import { Platform, StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Nav from './SRC/Components/Nav'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { MyStore } from './SRC/Redux/Store/Store'
import Rough from './SRC/Components/Rough'



const App = () => {
  return (
    <Provider store={MyStore}>
      <View style={styles.container}>
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </View>
    </Provider>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <Rough />
    // </SafeAreaView>
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
