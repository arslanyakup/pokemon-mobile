import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import PokeItem from './PokeItem.js';

export default function PokeItemList({ navigation, pokes }) {

  const _renderItem = ({ item, index }) => (
    <PokeItem navigation={navigation} poke={item} index={index + 1} />
  );

  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      data={pokes}
      renderItem={_renderItem}
    />
  );
}