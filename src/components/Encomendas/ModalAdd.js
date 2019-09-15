import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Text, Button} from 'react-native-elements';
import Modal from '../../shared/components/ModalDefault';
import EncomendaController from '../../controllers/EncomendaController';
import EncomendaService from '../../services/EncomendaService';

const initialState = {
  modalVisible: false,
  name: '',
  trackingCode: '',
};

function ModalAdd(props) {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setModalVisible(props.modalVisible);
  }, [props.modalVisible]);

  function setModalVisible(visible) {
    setstate({modalVisible: visible});
  }

  function onCloseModal() {
    setstate(initialState);
    props.onCloseModal();
  }

  async function addRastreio() {
    const rastreio = await EncomendaService.GetRastreioCorreios(
      state.trackingCode,
      state.name,
    );
    await EncomendaController._storeData(rastreio);
    setModalVisible(false);
  }

  return (
    <Modal
      isModalVisible={state.modalVisible}
      onCloseModal={() => onCloseModal()}>
      <View>
        <Text>Nome</Text>
        <TextInput value={state.name} placeholder="Insira o Nome..." />
        <Text>Número de Rastreio</Text>
        <TextInput
          value={state.trackingCode}
          placeholder="Insira o Código de Rastreio"
        />
        <Button title="Adiciona Rastreio" onPress={() => addRastreio()} />
        <Button
          title="Cancelar"
          onPress={() => setModalVisible(!state.modalVisible)}
        />
      </View>
    </Modal>
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

export default ModalAdd;
