import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { BallIndicator } from 'react-native-indicators';
import { colors } from 'theme';

export default function CustomLoader({ visible }) {
  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
    >
      <View style={styles.container}>
        <BallIndicator size={70} color={colors.darkGreen} />
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});