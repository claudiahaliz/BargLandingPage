import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCrown from 'react-native-vector-icons/MaterialCommunityIcons';

const AmountInfo = () => {
  return (
    <View style={amountInfoStyles.row}>
      <TouchableHighlight
        style={amountInfoStyles.col}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {}}>
        <View style={amountInfoStyles.content}>
          <Icon name="attach-money" size={26} color="#96D059" />
          <Text style={amountInfoStyles.text}>Rp 26.412</Text>
        </View>
      </TouchableHighlight>
      <View style={amountInfoStyles.separator} />
      <TouchableHighlight
        style={amountInfoStyles.col}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {}}>
        <View style={amountInfoStyles.content}>
          <IconCrown name="crown" size={26} color="orange" />
          <Text style={amountInfoStyles.text}>19,336 Points</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const amountInfoStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingBottom: 2,
    height: 56,
  },
  col: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    minWidth: '50%',
    position: 'relative',
  },
  separator: {
    backgroundColor: '#F5F5F5',
    width: 2,
  },
  content: {
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  text: {
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 4,
  },
});

export default AmountInfo;
