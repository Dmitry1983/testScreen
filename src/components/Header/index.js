import * as React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {COLOR, PADDING} from '../../constants/theme';
import {Filters, Raiting, Items, Zoom} from '../';

const HEIGHT = 186;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    height: Platform.OS === 'android' ? HEIGHT - 40 : HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: PADDING,
  },
  title: {
    color: COLOR.CLR_GRAY,
    fontSize: 30,
    fontWeight: '800',
  },
  zoomLine: {
    marginTop: Platform.OS === 'android' ? 20 : 40,
    height: 40,
    width: 375 - PADDING,
    justifyContent: 'center',
  },
  winesLine: {
    marginTop: Platform.OS === 'android' ? 0 : 10,
    height: 40,
    justifyContent: 'center',
  },
  optionsLine: {
    marginTop: Platform.OS === 'android' ? 0 : 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
});

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.zoomLine}>
          <Zoom />
        </View>

        <View style={styles.winesLine}>
          <Text style={styles.title}>WINES</Text>
        </View>
        <View style={styles.optionsLine}>
          <Items />
          <Raiting />
          <Filters />
        </View>
      </View>
    </View>
  );
};
