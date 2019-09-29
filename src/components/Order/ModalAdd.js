import React, {useState, useEffect} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {Text} from 'react-native-elements';
import Modal from '../../shared/components/ModalDefault';
import OrderController from '../../controllers/OrderController';
import OrderService from '../../services/OrderService';
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
    try {
      console.log(state.trackingCode);
      const rastreio = await OrderService.GetRastreioCorreios(
        state.trackingCode,
        state.name,
      );

      console.log(rastreio);
      if (rastreio.result) {
        console.log(rastreio.result);
        await OrderController._storeData(rastreio.encomenda);
        setModalVisible(false);
      } else {
        await Alert.alert('', rastreio.message);
        setModalVisible(false);
      }
    } catch (error) {
      await Alert.alert('', error.message);
      setModalVisible(false);
    }
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
