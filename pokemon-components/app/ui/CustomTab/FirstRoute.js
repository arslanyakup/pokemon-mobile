import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import _ from 'lodash';
import { colors, fonts, size } from 'theme';

export default function FirstRoute({ poke }) {
  return (
    <View style={[styles.container]} >
      <View style={styles.itemContainer}>
        <Text style={styles.leftText}>Habitat</Text>
        <Text style={styles.rightText}>{poke.habitat.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.leftText}>Base Experience</Text>
        <Text style={styles.rightText}>{poke.base_experience}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.leftText}>Height</Text>
        <Text style={styles.rightText}>{poke.height / 10} m</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.leftText}>Weight</Text>
        <Text style={styles.rightText}>{poke.weight / 10} kg</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.leftText}>Abilities</Text>
        <Text style={styles.rightText}>
          {
            _.map(poke.abilities, (item, index) => {
              return (
                <Text>{item.ability.name}{index !== poke.abilities.length - 1 ? ', ' : ''}</Text>
              )
            })
          }
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.leftText}>Types</Text>
        <Text style={styles.rightText}>
          {
            _.map(poke.types, (item, index) => {
              return (
                <Text>{item.type.name}{index !== poke.types.length - 1 ? ', ' : ''}</Text>
              )
            })
          }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3
  },
  leftText: {
    flex: 1,
    color: colors.gray,
    fontFamily: fonts.bold,
    fontSize: size.medium
  },
  rightText: {
    flex: 2,
    textAlign: 'left',
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: size.medium
  }
});