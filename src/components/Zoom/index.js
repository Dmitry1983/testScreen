import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR, PADDING} from '../../constants/theme';
import {ZoomSvg} from '../../assets/SvgIcons';

const ZOOM_SIZE = 23;

const styles = StyleSheet.create({
  zoom: {
    height: ZOOM_SIZE,
    width: ZOOM_SIZE,
    // backgroundColor: 'grey',
    marginLeft: 375 - PADDING - ZOOM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Zoom = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.zoom}
        onPress={() => console.log('Press Zoom')}>
        <ZoomSvg color={COLOR.CLR_GREEN_01} />
      </TouchableOpacity>
    </View>
  );
};
