import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';

const ListVertical = ({sectionTitle, data, content}) => {
  return (
    <SafeAreaView style={listVerticalStyles.container}>
      <Text style={listVerticalStyles.sectionTitle}>{sectionTitle}</Text>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index}
        listKey={(item, index) => index}
        renderItem={item => {
          return content(item);
        }}
      />
    </SafeAreaView>
  );
};

const listVerticalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    padding: 10,
    color: '#282828',
  },
});

export default ListVertical;
