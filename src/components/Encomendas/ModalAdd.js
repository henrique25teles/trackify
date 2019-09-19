import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {Text} from 'react-native-elements';
import Modal from '../../shared/components/ModalDefault';
import EncomendaController from '../../controllers/EncomendaController';
import EncomendaService from '../../services/EncomendaService';
import {PrimaryButton} from '../../shared/components/Buttons';

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
      isVisible={state.modalVisible}
      onModalHide={() => onCloseModal()}
      titleText="Adicionar Encomenda">
      <View>
        <Text>Nome</Text>
        <TextInput
          value={state.name}
          onChangeText={text => setstate({...state, name: text})}
          placeholder="Insira o Nome..."
        />
        <Text>Número de Rastreio</Text>
        <TextInput
          value={state.trackingCode}
          onChangeText={text => setstate({...state, trackingCode: text})}
          placeholder="Insira o Código de Rastreio"
        />
        <PrimaryButton
          title="Adiciona Rastreio"
          onPress={() => addRastreio()}
        />
        <PrimaryButton
          title="Cancelar"
          onPress={() => setModalVisible(!state.modalVisible)}
        />
      </View>
    </Modal>
  );
}

export default ModalAdd;
