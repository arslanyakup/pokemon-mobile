/**
 *
 * Foo
 *
 */

import React from 'react';
import { View, Text } from 'react-native';
import { colors, fonts, size } from 'theme';

function Foo(props) {
  return (
    <View>
      <Text style={{ color: colors.red, fontFamily: fonts.bold, fontSize: size.medium }}>{props.text}</Text>
    </View>
  );
}

export default Foo;
