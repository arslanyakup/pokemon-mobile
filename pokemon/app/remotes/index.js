
import React from 'react';
import RemoteComponent from '@composiv/liveui-react-native';

const remoteComponent = (name, props) => <RemoteComponent name={name} {...props} />

const CustomLoader = props => remoteComponent('customLoader', props);
const PokeItemList = props => remoteComponent('pokeItemList', props);
const CustomTabView = props => remoteComponent('customTabView', props);
const Back = props => remoteComponent('back', props);
const Pokemon = props => remoteComponent('pokemon', props);
const Pokedex = props => remoteComponent('pokedex', props);

export { CustomLoader, PokeItemList, CustomTabView, Back, Pokemon, Pokedex };