import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/Home';
import PokeDetail from './app/screens/PokeDetail';
import { colors } from './app/styles';
import { Back, Pokemon, Pokedex } from './app/remotes';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.flex1}>
        <Pokedex style={styles.pokedex} width={400} height={400} fill={colors.transparentGrey} />
        <NavigationContainer>
          <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
          <Stack.Navigator
            screenOptions={props => ({
              headerBackImage: () => <Back width={30} height={30} fill={colors.darkGreen} style={styles.horizontal20} />,
              headerTitle: null,
              headerBackTitleVisible: false,
              headerStyle: styles.header,
              headerRight: () => (
                <Pokemon fill='black' style={styles.horizontal20} />
              ),
            })}
            initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="PokeDetail" component={PokeDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pokedex: {
    position: 'absolute',
    zIndex: 1,
    top: -100,
    right: -100
  },
  flex1: {
    flex: 1
  },
  header: {
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: '#fff',
    elevation: 0
  },
  horizontal20: {
    marginHorizontal: 20
  }
});

export default App;
