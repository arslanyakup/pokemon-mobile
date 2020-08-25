import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { colors, fonts, size } from 'theme';

export default function SecondRoute({ poke }) {
  return (
    <View style={styles.container} >
      {
        _.map(poke.stats, item => (
          <View style={styles.seekBar}>
            <Text style={styles.statName}>{item?.stat?.name}</Text>
            <Text style={styles.baseStat}>{item.base_stat}</Text>
            <View style={styles.barContainer}>
              <View style={[{ backgroundColor: item.base_stat < 50 ? colors.seekRed : colors.seekGreen, width: (Dimensions.get('window').width - 40) / 2 * item.base_stat / 100 }, styles.bar]} />
            </View>
          </View>
        ))
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  },
  seekBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3
  },
  statName: {
    flex: 1,
    color: colors.gray,
    fontFamily: fonts.bold,
    fontSize: size.medium
  },
  baseStat: {
    flex: 1,
    textAlign: 'left',
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: size.medium,
    marginLeft: 5
  },
  barContainer: {
    height: 5,
    backgroundColor: colors.seekGrey,
    width: (Dimensions.get('window').width - 40) / 2
  },
  bar: {
    position: 'absolute',
    height: 5,
  }
});