import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
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
      <Icon name="add" containerStyle={styles.botao} onPress={AddEncomenda} />
    </>
  );
}

const styles = StyleSheet.create({
  botao: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#ff18',
    borderRadius: 30,
    elevation: 8,
  },
});

// export default () => <Icon name="add" containerStyle={styles.botao} />;
export default ButtonAdd;
