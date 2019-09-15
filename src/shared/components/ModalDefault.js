import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

function ModalDefault(props) {
  const [isVisible, setIsVisible] = useState(false);
  const {children, isModalVisible, onCloseModal = () => {}} = props;

  useEffect(() => {
    setIsVisible(isModalVisible);
  }, [isModalVisible]);

  return (
    <View style={styles.Container}>
      <Modal
        backdropOpacity={0.6}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        isVisible={isVisible}
        onModalHide={() => onCloseModal()}>
        <View style={styles.ModalContent}>{children}</View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default ModalDefault;
