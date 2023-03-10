import { FlatList, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const CategoryData = [
  { id: 1, title: 'Top' },
  { id: 2, title: 'Men' },
  { id: 3, title: 'Women' },
  { id: 4, title: 'Kids', },
];

const Item = ({ title, bgClr, clr, onPress, stat }) => (
  <Pressable
    style={[styles.btn, { backgroundColor: bgClr}]}
    onPress={onPress}>
    <Text style={[styles.title, { color: clr }]}>{stat} {title}</Text>
  </Pressable>
);

const Categories = () => {
  const [selectedId, setSelectedId] = useState(1);
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        bgClr={(item.id === selectedId) ? 'black' : 'white'}
        clr={(item.id === selectedId) ? 'white' : 'black'}
        // mrg={(item.id === 0 && item.id === )}
      />
    );
  };

  return (
    <View style={styles.container} horizontal={true}>
      <FlatList
        data={CategoryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: RFPercentage(1.4),
    // marginHorizontal: RFPercentage(1.7),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFPercentage(0.4),
    paddingHorizontal: RFPercentage(4),
    paddingVertical: RFPercentage(1.6),
    borderRadius: RFPercentage(100),
    elevation: RFValue(1),
    shadowColor: 'black',
    shadowOffset: {
      height: RFValue(1),
      width: RFValue(0),
    },
    shadowRadius: RFValue(2),
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: RFPercentage(2.1),
  },
})
