import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _ from 'lodash';

import { pokeDetail } from '../../utils/service'
import { colors, fonts, size } from '../../styles';
import { CustomLoader, CustomTabView, Back } from '../../remotes';

export default function PokeDetail({ route, navigation }) {
  const { pokeIndex } = route.params
  const [poke, setPoke] = React.useState(undefined);
  React.useEffect(() => {
    pokeDetail(pokeIndex).then(response => {
      setPoke(response.data);
    });
  }, [poke]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: _.isNil(poke) ? colors.white : colors[poke.color.name] }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.pop}>
          <Back width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
      </View>
      {
        _.isNil(poke) ? <CustomLoader visible /> :
          <>
            <Image
              style={styles.image}
              source={{
                uri: 'https://pokeres.bastionbot.org/images/pokemon/'.concat(pokeIndex).concat('.png'),
              }}
            />
            <View style={styles.flex1}>
              <View style={styles.title}>
                <Text style={styles.name}>{poke.name}</Text>
                <Text style={styles.pokeIndex}>{'#'.concat(pokeIndex)}</Text>
              </View>
              <View style={styles.tags}>
                {
                  _.map(poke?.egg_groups, item => {
                    return (
                      <View style={styles.tagContainer}>
                        <Text style={styles.tagName}>{item.name}</Text>
                      </View>
                    );
                  })
                }
              </View>
            </View>
            <CustomTabView poke={poke} />
          </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    marginVertical: 8,
    paddingVertical: 8
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 300,
    zIndex: 1,
    alignSelf: 'center'
  },
  flex1: {
    flex: 1
  },
  title: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  name: {
    fontSize: size.h1,
    color: colors.white,
    fontFamily: fonts.bold,
    marginLeft: 4
  },
  pokeIndex: {
    fontSize: size.medium,
    color: colors.white,
    fontFamily: fonts.semiBold,
    marginLeft: 4
  },
  tags: {
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  tagContainer: {
    marginRight: 8,
    marginTop: 20,
    backgroundColor: colors.transparentWhite,
    padding: 8,
    borderRadius: 16
  },
  tagName: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: size.small
  }
})