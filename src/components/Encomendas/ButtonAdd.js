import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ModalAdd from './ModalAdd';
import {RoundButton} from '../../shared/components/Buttons';

function ButtonAdd() {
  const [modalVisible, setstate] = useState(false);

  function AddEncomenda() {
    setstate(true);
  }

  function CloseModal() {
    setstate(false);
  }

  return (
    <>
      <ModalAdd modalVisible={modalVisible} onCloseModal={CloseModal} />
      <RoundButton
        icon={{name: 'add'}}
        onPress={AddEncomenda}
        containerStyle={styles.containerStyle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default ButtonAdd;
