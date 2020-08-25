import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import _ from 'lodash';
import { CustomLoader, PokeItemList } from '../../remotes';
import { colors, fonts, size } from '../../styles';
import { pokeList } from '../../utils/service';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const [pokes, setPokes] = React.useState([]);
  React.useEffect(() => {
    pokeList().then(response => {
      setPokes(response.data.results);
    });
  }, []);
  return (
    <SafeAreaView style={[styles.container, styles.flex1]}>
      <View style={styles.flex1}>
        {
          _.isEmpty(pokes) ?
            <CustomLoader visible /> :
            <View style={[styles.listContainer, styles.flex1]}>
              <Text style={styles.title}>Pokedex</Text>
              <View style={styles.flex1}>
                <PokeItemList navigation={navigation} pokes={pokes} />
              </View>
            </View>
        }
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    textAlign: 'left',
    fontFamily: fonts.bold,
    fontSize: size.h1
  },
  listContainer: {
    marginHorizontal: 20
  },
  flex1: {
    flex: 1
  }
})