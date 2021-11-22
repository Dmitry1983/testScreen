import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {QRCode, Card} from '../../../components';
import {PADDING} from '../../../constants/theme';
import {Data} from '../../../assets/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  qrButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export const wineScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={Card}
        numColumns={1}
        keyExtractor={key => key.id.toString()}
        initialScrollIndex={0}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.qrButton}>
        <QRCode />
      </View>
    </View>
  );
};
