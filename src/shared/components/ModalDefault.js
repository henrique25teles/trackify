import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Modal from 'react-native-modal';
import ThemeContext from '../Themes/ThemeContext';

function ModalDefault(props) {
  const {titleText, children} = props;
  const context = useContext(ThemeContext);

  return (
    <View {...context.ModalDefault.container}>
      <Modal {...context.ModalDefault.modal} {...props}>
        <View {...context.ModalDefault.title}>
          <Text {...context.ModalDefault.titleText}>{titleText}</Text>
        </View>
        <View {...context.ModalDefault.modalContent}>{children}</View>
      </Modal>
    </View>
  );
}

export default ModalDefault;
