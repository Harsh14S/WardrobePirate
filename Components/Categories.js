import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';


const CategoryData = [
  {
    id: 1,
    title: 'Top',
    stat: '1',
  },
  {
    id: 2,
    title: 'Men',
    stat: '0',
  },
  {
    id: 3,
    title: 'Women',
    stat: '0',
  },
  {
    id: 4,
    title: 'Kids',
    stat: '0',
  },
];

const Item = ({ title, bgClr, clr, onPress, stat }) => (
  <TouchableOpacity
    style={[styles.btn, { backgroundColor: bgClr }]}
    onPress={onPress}>
    <Text style={[styles.title, { color: clr }]}>{stat} {title}</Text>
  </TouchableOpacity>
);

const Categories = () => {
  const [selectedId, setSelectedId] = useState('1');

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'black' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        bgClr={backgroundColor}
        clr={color}
      />
    );
  };

  return (
    <ScrollView style={styles.container} horizontal={true}>
      <FlatList
        data={CategoryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'grey',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(4),
    margin: RFValue(2),
    paddingHorizontal: RFValue(29),
    borderRadius: RFValue(25),
    // borderWidth: 0.2,
    shadowColor: 'black',
    // elevation: 20,
    shadowOffset: (0, 10),
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  title: {
    // color: 'black',
    fontSize: RFValue(13),
  },
  list: {

  }
})
