import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../../constants/theme';
const styles = StyleSheet.create({
  container: {
    height: 20,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY,
    fontSize: 14,
  },
  margin: {marginRight: 3},
});
export const Items = ({num = 2479}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.margin]}>{num}</Text>
      <Text style={styles.text}>wines</Text>
    </View>
  );
};
