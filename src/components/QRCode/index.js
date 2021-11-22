import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR} from '../../constants/theme';
import {Qrcode} from '../../assets/SvgIcons';

const WIDTH = 190;
const HIEGHT = 42;

const styles = StyleSheet.create({
  container: {
    height: HIEGHT,
    width: WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLOR.CLR_GREEN,
    shadowColor: COLOR.CLR_GREEN, // shadow ios
    shadowRadius: 10, // shadow ios
    shadowOpacity: 0.3, // shadow ios
    shadowOffset: {width: 2, height: 4}, // shadow ios
    elevation: 10, // shadow Android
  },
  text: {
    color: COLOR.CLR_WHITE,
    marginLeft: 7,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});

export const QRCode = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Press QR CODE READER')}>
      <Qrcode color={COLOR.CLR_WHITE} props={{height: 24}} />
      <Text style={styles.text}>QR CODE READER</Text>
    </TouchableOpacity>
  );
};
