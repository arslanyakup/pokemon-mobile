import { View } from 'react-native';
import Modal from 'react-native-modal';
import { BallIndicator } from 'react-native-indicators';
import { colors } from 'theme';

export default function CustomLoader(props) {
  const { visible } = props;
  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onClose={() => {
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <BallIndicator size={60} color={colors.darkGreen} />
      </View>
    </Modal>
  );
}