import { FlatList, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const CategoryData = [
  { id: 1, title: 'Top' },
  { id: 2, title: 'Men' },
  { id: 3, title: 'Women' },
  { id: 4, title: 'Kids', },
];

const Item = ({ title, bgClr, clr, onPress, stat }) => (
  <Pressable
    style={[styles.btn, { backgroundColor: bgClr }]}
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
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(4),
    marginVertical: RFValue(2),
    marginHorizontal: RFValue(3),
    paddingHorizontal: RFValue(29),
    borderRadius: RFValue(25),
    // borderWidth: 0.2,
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
    // color: 'black',
    fontSize: RFValue(13),
  },
  list: {

  }
})
