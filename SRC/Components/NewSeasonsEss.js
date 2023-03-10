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
          <Text style={styles.headingTxt}>New Seasson Essentials.</Text>
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
    borderRadius: RFPercentage(4),
    overflow: 'hidden',
    marginBottom: RFPercentage(1.4),
    marginHorizontal: RFPercentage(1.7),
  },
  imgBack: {
    flex: 1,
    height: RFPercentage(24),
  },
  inContainer: {
    flex: 1,
    paddingHorizontal: RFPercentage(3),
    paddingVertical: RFPercentage(3),
    backgroundColor: '#00000090',
  },
  headingTxt: {
    color: 'white',
    fontSize: RFPercentage(4.6),
    fontWeight: '500'
  },
  btn: {
    backgroundColor: 'rgb(253, 110, 0)',
    paddingHorizontal: RFPercentage(1),
    paddingVertical: RFPercentage(1.7),
    width: RFPercentage(13),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFPercentage(4),
    marginTop: RFPercentage(1.7)
  },
  btntxt: {
    color: 'white',
    fontSize: RFPercentage(1.6),
  },
})
