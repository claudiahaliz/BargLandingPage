import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardFood = props => {
  const {image, title, rating, isPromo = false} = props;
  return (
    <TouchableHighlight
      style={cardFoodStyles.container}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {}}>
      <>
        <Image style={cardFoodStyles.image} source={{uri: image}} />
        {isPromo && <Text style={cardFoodStyles.promo}>Promo</Text>}
        <Text numberOfLines={2} style={cardFoodStyles.title}>
          {title}
        </Text>
        <View style={cardFoodStyles.desc}>
          <Icon name="star" size={12} color="orange" />
          <Text style={cardFoodStyles.descText}>{rating}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

const cardFoodStyles = StyleSheet.create({
  container: {
    maxWidth: 160,
    flex: 1,
    margin: 8,
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 4,
    position: 'relative',
  },
  promo: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 6,
    position: 'absolute',
    margin: 8,
    borderRadius: 2,
    fontSize: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8,
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

export default CardFood;
