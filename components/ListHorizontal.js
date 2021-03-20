import React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';

const ListHorizontal = props => {
  const {title, data, content} = props;
  return (
    <SafeAreaView style={listHorizontalStyles.container}>
      <Text style={listHorizontalStyles.sectionTitle}>{title}</Text>
      <FlatList
        horizontal
        listKey={(item, index) => index}
        data={data}
        renderItem={({item}) => {
          return content(item);
        }}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const listHorizontalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    padding: 10,
    color: '#282828',
  },
});

export default ListHorizontal;
