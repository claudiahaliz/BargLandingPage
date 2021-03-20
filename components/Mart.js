import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  View,
  TouchableHighlight,
} from 'react-native';

const Mart = props => {
  const {data, sectionTitle} = props;
  return (
    <SafeAreaView style={martStyles.container}>
      <Text style={martStyles.sectionTitle}>{sectionTitle}</Text>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index}
        listKey={(item, index) => index}
        renderItem={({item}) => {
          return (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={martStyles.grid}
              onPress={() => {}}>
              <>
                {item.isRound ? (
                  <View style={martStyles.imageBackground}>
                    <Image
                      style={martStyles.imageWithDesc}
                      source={item.image}
                    />
                  </View>
                ) : (
                  <Image
                    style={
                      item.desc ? martStyles.imageWithDesc : martStyles.image
                    }
                    source={item.image}
                  />
                )}
                <Text
                  style={
                    item.desc ? martStyles.titleWithDesc : martStyles.title
                  }>
                  {item.title}
                </Text>
                {item.desc && <Text style={martStyles.desc}>{item.desc}</Text>}
              </>
            </TouchableHighlight>
          );
        }}
      />
    </SafeAreaView>
  );
};

const martStyles = StyleSheet.create({
  container: {
    padding: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    padding: 5,
    color: '#282828',
  },
  grid: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    height: 120,
    margin: 4,
    borderRadius: 8,
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: -20,
    borderBottomRightRadius: 8,
  },
  imageBackground: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 42,
    height: 42,
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  imageWithDesc: {
    width: 42,
    height: 42,
  },
  title: {
    color: '#282828',
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleWithDesc: {
    color: '#282828',
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 14,
  },
  desc: {
    color: 'grey',
    fontSize: 12,
  },
});

export default Mart;
