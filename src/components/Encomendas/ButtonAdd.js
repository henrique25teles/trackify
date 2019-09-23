import React, {useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import ModalAdd from './ModalAdd';
import {RoundButton} from '../../shared/components/Buttons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
      right: wp('3%'),
      bottom: StatusBar.currentHeight + hp('3%'),
    },
  });

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

export default ButtonAdd;
