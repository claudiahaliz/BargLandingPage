import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardDiscover = ({image, title, desc, descType = 'date'}) => {
  return (
    <TouchableHighlight
      style={cardDiscoverStyles.container}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {}}>
      <>
        <Image style={cardDiscoverStyles.image} source={image} />
        <Text numberOfLines={5} style={cardDiscoverStyles.title}>
          {title}
        </Text>
        <View style={cardDiscoverStyles.desc}>
          <Icon
            name={descType === 'date' ? 'date-range' : 'chrome-reader-mode'}
            size={12}
            color="grey"
          />
          <Text style={cardDiscoverStyles.descText}>{desc}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

const cardDiscoverStyles = StyleSheet.create({
  container: {
    maxWidth: 186,
    flex: 1,
    margin: 12,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  desc: {
    flex: 1,
    flexDirection: 'row',
  },
  descText: {
    fontSize: 10,
    color: 'grey',
    marginLeft: 4,
    marginTop: -2,
  },
});

export default CardDiscover;
