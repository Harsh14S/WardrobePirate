import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

const RatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  // const starImgFilled = require('../Components/ProjectData/Logo/star_filled.png');
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/corner_filled.png';
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, key) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          )
          )
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Rough2</Text>
      <CustomRatingBar />
    </View>
  )
}

export default RatingBar

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: RFValue(20),
  },
  starImgStyle: {
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: 'cover',
    marginHorizontal: RFValue(10),
    // backgroundColor: 'black',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
