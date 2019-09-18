import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Modal from 'react-native-modal';

function ModalDefault(props) {
  const [isVisible, setIsVisible] = useState(false);
  const {titleText, children, isModalVisible, onCloseModal = () => {}} = props;

  useEffect(() => {
    setIsVisible(isModalVisible);
  }, [isModalVisible]);

  return (
    <View style={styles.container}>
      <Modal
        backdropOpacity={0.6}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        isVisible={isVisible}
        onModalHide={() => onCloseModal()}
        style={styles.modal}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{titleText}</Text>
        </View>
        <View style={styles.modalContent}>{children}</View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
  },
  modalContent: {
    backgroundColor: '#fafafa',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#4096db',
    elevation: 6, //Android
    height: 50,
  },
  titleText: {
    fontSize: 25,
  },
});

export default ModalDefault;
