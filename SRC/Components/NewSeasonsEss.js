import { Alert, ImageBackground, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const NewSeasonsEss = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../ProjectData/Logo/wardrobe.jpeg')}
        style={styles.imgBack}
      >
        <View style={styles.inContainer}>
          <Text style={styles.txt}>New Seasson Essentials.</Text>
          <Pressable
            onPress={() => Alert.alert("Pressed")}
            underlayColor='orange'
            style={styles.btn}
          >
            <Text style={styles.btntxt}>View More</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default NewSeasonsEss

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: RFValue(30),
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  imgBack: {
    flex: 1,
    // opacity: 0.5,
  },
  inContainer: {
    padding: RFValue(16),
  },
  txt: {
    color: 'white',
    fontSize: RFValue(28),
  },
  btn: {
    backgroundColor: 'darkorange',
    width: RFPercentage(14),
    height: RFValue(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(15),
    marginTop: RFValue(7)
  },
  btntxt: {
    color: 'white',
    fontSize: RFValue(12),
  },
})
