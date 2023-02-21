import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const RatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(5);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = '../Components/ProjectData/Logo/star_filled.png';
  const starImgCorner = '../Components/ProjectData/Logo/star_corner.png';
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, key) => (
            <Pressable activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)} >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating ? require(starImgFilled) : require(starImgCorner)
                }
              />
            </Pressable>
          )
          )
        }
      </View >
    )
  }

  return (
    <View style={styles.container}>
      <CustomRatingBar />
    </View>
  )
}

export default RatingBar

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  customRatingBarStyle: {
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  starImgStyle: {
    tintColor: 'darkorange',
    width: RFValue(14),
    height: RFValue(14),
    resizeMode: 'cover',
    marginRight: RFValue(3.5),
  },
})
