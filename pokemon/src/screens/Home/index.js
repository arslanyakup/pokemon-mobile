import React from 'react';
import { View, Image } from 'react-native';
import { BallIndicator } from 'react-native-indicators';

import RemoteComponent from '@composiv/liveui-react-native';
import { colors } from '../../styles';
import { pokeList } from '../../utils/service'

const Foo = props => <RemoteComponent name="foo" {...props} />;

export default function HomeScreen() {
  const [pokes, setPokes] = React.useState([]);
  React.useEffect(() => {
    pokeList().then(response => {
      setPokes(response.data.results);
    });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: colors.lightGreen }}>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <View style={{ width: 320, height: 320, borderRadius: 160, backgroundColor: colors.transparentWhite, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 280, height: 280, top: 60 }}
            source={{
              uri: 'https://pokeres.bastionbot.org/images/pokemon/25.png',
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Foo text='Home Screen' />
      </View>
    </View>
  );
}