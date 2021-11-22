import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Badge} from '../../assets/SvgIcons';

const WIDTH = 180;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WIDTH,
  },
  text: {
    fontFamily: 'PTSerif-Bold',
    color: 'grey',
  },
  badge: {
    height: 22,
  },
  badgeRotate: {
    height: 22,
    transform: [{rotateX: '180deg'}, {rotateZ: '180deg'}],
  },
});

export const Choice = ({color}) => {
  return (
    <View style={styles.container}>
      <Badge color={color} props={styles.badge} />
      <Text style={[styles.text, {color}]}>Sommelier Choice</Text>
      <Badge color={color} props={styles.badgeRotate} />
    </View>
  );
};
