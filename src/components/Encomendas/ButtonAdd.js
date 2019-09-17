import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import ModalAdd from './ModalAdd';

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
      <Button
        raised
        icon={{name: 'add'}}
        containerStyle={styles.botaoContainer}
        buttonStyle={styles.botao}
        onPress={AddEncomenda}
      />
      {/* <Icon name="add" containerStyle={styles.botao} onPress={AddEncomenda} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 56,
    height: 56,
    borderRadius: 30,
    elevation: 30,
    backgroundColor: '#4096db',
  },
  botaoContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
  },
});

export default ButtonAdd;
