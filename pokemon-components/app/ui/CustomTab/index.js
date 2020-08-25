import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { colors, fonts } from 'theme';

import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';

export default class CustomTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'about', title: 'About' },
      { key: 'baseStats', title: 'Base Stats' },
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 157 : 0
                ),
              })
            ),
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 195 : 0
                ),
              })
            ),
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 205 : 0
                ),
              })
            )
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color, fontFamily: fonts.semiBold }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    about: () => <FirstRoute poke={this.props.poke} />,
    baseStats: () => <SecondRoute poke={this.props.poke} />,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    justifyContent: 'center',
  },
});
