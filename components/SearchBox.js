import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBox = () => {
  return (
    <View style={searchBoxStyles.container}>
      <TextInput
        placeholder="Search for offers and food..."
        style={searchBoxStyles.textInput}
      />
      <View style={searchBoxStyles.icon}>
        <Icon name="search" size={20} color="grey" />
      </View>
    </View>
  );
};

const searchBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: '#96D059',
  },
  textInput: {
    borderColor: 'whitesmoke',
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: 'white',
    position: 'relative',
    paddingLeft: 36,
  },
  icon: {
    backgroundColor: 'whitesmoke',
    padding: 9,
    position: 'absolute',
    left: 12,
    top: 12,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
});

export default SearchBox;
