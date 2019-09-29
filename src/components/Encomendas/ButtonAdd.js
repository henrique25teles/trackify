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

  const styles = StyleSheet.create({
    containerStyle: {
      position: 'absolute',
      right: '3%',
      bottom: '3%',
    },
  });

  return (
    <>
      <ModalAdd modalVisible={modalVisible} onCloseModal={CloseModal} />
      <RoundButton
        icon={{name: 'ios-add-circle-outline', type: 'ionicon'}}
        onPress={AddEncomenda}
        containerStyle={styles.containerStyle}
      />
    </>
  );
}

export default ButtonAdd;
