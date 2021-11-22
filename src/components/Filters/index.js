import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FiltersSvg} from '../../assets/SvgIcons';
import {COLOR} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    height: 20,
    flexDirection: 'row',
  },
  viewIcon: {
    width: 17,
    height: 17,
  },
  viewText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 16,
    marginLeft: 5,
  },
  text: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY,
    fontSize: 14,
  },
});

export const Filters = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Press Filters')}>
      <View style={styles.viewIcon}>
        <FiltersSvg color={COLOR.CLR_GRAY} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>Filters</Text>
      </View>
    </TouchableOpacity>
  );
};
