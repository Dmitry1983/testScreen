import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY,
  },
  text2: {
    fontFamily: 'PTSerif-Regular',
    color: COLOR.CLR_GRAY,
    fontSize: 20,
    fontWeight: '600',
  },
  text3: {
    fontWeight: '200',
    color: COLOR.CLR_GRAY,
    fontFamily: 'PTSerif-Italic',
    fontSize: 22,
  },
});

export const blankScreen = ({props = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>blank</Text>
      <Text style={styles.text2}>Screen</Text>
      <Text style={styles.text3}>{props}</Text>
    </View>
  );
};
