import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLOR} from '../../constants/theme';
import {Choice} from '../';
import {RightArrow} from '../../assets/SvgIcons';

const styles = StyleSheet.create({
  container: {
    height: 260,
    marginVertical: 5,
  },
  subContainer: {
    height: 200,
    backgroundColor: COLOR.CLR_WHITE,
    flexDirection: 'row',
  },
  bottle: {
    width: 80,
    //backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 36,
    marginTop: -10,
  },
  textCont: {
    flex: 1,
  },
  choice: {
    height: 30,
    // backgroundColor: 'green',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    //backgroundColor: 'green',
    marginTop: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
  marginChoice: {
    marginTop: 20,
  },
  priceContainer: {
    marginTop: 1,
    height: 59,
    backgroundColor: COLOR.CLR_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightArrow: {
    marginTop: 3,
    width: 18,
    height: 10,
  },
  viewLine: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitleLine: {
    width: 50,
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY_LIGHT_01,
    fontSize: 12,
  },
  textInfoLine: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY,
    fontSize: 12,
  },
  numbers: {
    width: 90,
    alignItems: 'center',
  },
  numbersText: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GREEN,
    fontSize: 34,
  },
  exceptional: {
    width: 160,
  },
  exceptionalText: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GRAY,
    fontSize: 14,
  },
  reviewsText: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GREEN,
    fontSize: 12,
  },
  viewPrice: {
    flexDirection: 'row',
    marginRight: 20,
  },
  textPrice: {
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GOLD,
    fontSize: 17,
  },
  price: {
    marginLeft: 10,
    fontFamily: 'PTSerif-Bold',
    color: COLOR.CLR_GOLD,
    fontSize: 17,
  },
});

export const Card = ({item}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => console.log('Press Card, id:', item.id)}>
      <View style={styles.subContainer}>
        <View style={styles.bottle}>
          <Image style={styles.image} source={item.url} />
        </View>
        <View style={styles.textCont}>
          {item.choice ? (
            <View style={styles.choice}>
              <Choice color={COLOR.CLR_GRAY_LIGHT_01} />
            </View>
          ) : null}
          <View
            style={[styles.title, item.choice ? null : styles.marginChoice]}>
            <Text style={styles.titleText}>{item.title.toUpperCase()}</Text>
            <View style={styles.arrowContainer}>
              <View style={styles.rightArrow}>
                <RightArrow color={COLOR.CLR_GOLD} />
              </View>
            </View>
          </View>
          <View style={styles.viewLine}>
            <Text style={styles.textTitleLine}>AOC</Text>
            <Text style={styles.textInfoLine}>{item.AOC}</Text>
          </View>
          <View style={styles.viewLine}>
            <Text style={styles.textTitleLine}>Color</Text>
            <Text style={styles.textInfoLine}>{item.Color}</Text>
          </View>
          <View style={styles.viewLine}>
            <Text style={styles.textTitleLine}>Grapes</Text>
            <Text style={styles.textInfoLine}>{item.Grapes}</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.numbers}>
          <Text style={styles.numbersText}>{item.numbers}</Text>
        </View>
        <View style={styles.exceptional}>
          <Text style={styles.exceptionalText}>Exceptional</Text>
          <Text style={styles.reviewsText}>{item.reviews} reviews</Text>
        </View>
        <View style={styles.viewPrice}>
          <Text style={styles.textPrice}>CHF</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
