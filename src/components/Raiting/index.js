import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RatingArrow} from '../../assets/SvgIcons';
import {COLOR} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 22,
    width: 60,
  },
  viewIcon: {
    width: 13,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginTop: 2,
  },
  text: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY,
    fontSize: 14,
  },
});

export const Raiting = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Press Raiting')}>
      <Text style={styles.text}>Raiting</Text>
      <View style={styles.viewIcon}>
        <RatingArrow color={COLOR.CLR_GRAY} />
      </View>
    </TouchableOpacity>
  );
};
