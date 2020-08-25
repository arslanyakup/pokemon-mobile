import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts, size } from 'theme';

export default function PokeItem({ navigation, poke, index }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PokeDetail', { pokeIndex: index })} key={index} style={[styles.container, { marginLeft: index % 2 === 1 ? 0 : 16, marginRight: index % 2 === 0 ? 16 : 0 }]}>
      <View style={styles.padding16}>
        <Text style={styles.pokeName}>{poke.name}</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://pokeres.bastionbot.org/images/pokemon/'.concat(index).concat('.png') }}
        />
      </View>
    </TouchableOpacity >
  );
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: (Dimensions.get('window').width - 56) / 2,
    backgroundColor: colors.lightGreen,
    height: 140,
    marginVertical: 8
  },
  padding16: {
    padding: 16
  },
  pokeName: {
    fontFamily: fonts.semiBold,
    fontSize: size.medium,
    color: colors.white
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end'
  }
});