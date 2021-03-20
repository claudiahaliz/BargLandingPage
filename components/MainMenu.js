import React from 'react';
import {
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';

const MainMenu = props => {
  const {data} = props;

  return (
    <SafeAreaView style={mainMenuStyles.container}>
      <FlatList
        data={data}
        numColumns={4}
        keyExtractor={(item, index) => index}
        listKey={(item, index) => index}
        renderItem={({item}) => {
          return (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={mainMenuStyles.grid}
              onPress={() => {}}>
              <>
                <Image
                  source={{uri: item.imageUri}}
                  style={mainMenuStyles.image}
                />
                <Text style={mainMenuStyles.text}>{item.text}</Text>
              </>
            </TouchableHighlight>
          );
        }}
      />
    </SafeAreaView>
  );
};

const mainMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#F5F5F5',
  },
  grid: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    padding: 14,
    margin: 1,
  },
  image: {
    width: 48,
    height: 48,
  },
  text: {
    color: 'purple',
    marginTop: 10,
  },
});

export default MainMenu;
