import OrderViewModel, {Storage} from '../models/Order/OrderViewModel';
import {Alert} from 'react-native';
import OrderDetailViewModel from '../models/Order/OrderDetailViewModel';

const AlertaErro = mensagem => {
  Alert.alert('Erro', mensagem, [{text: 'Ok'}]);
};

const onError = err => {
  console.warn(err.message);
  switch (err.name) {
    case 'NotFoundError':
      AlertaErro('Registro não encontrado');
      break;
    case 'ExpiredError':
      AlertaErro('Registro Expirado');
      break;
  }
  return null;
};

const toModel = item => {
  return new OrderViewModel({
    Id: String(item.Id),
    Name: String(item.Name),
    Delivered: item.Delivered,
    TrackingCode: String(item.TrackingCode),
    Detalhes: item.Detalhes.map(toModelDetalhes),
  });
};

const toModelDetalhes = detalhe => {
  return new OrderDetailViewModel({
    Id: String(detalhe.Id),
    LastDate: new Date(detalhe.LastDate),
    Local: String(detalhe.Local),
    Status: String(detalhe.Status),
    Register: String(detalhe.Register),
  });
};

export default {
  _storeData: async obj => {
    await global.storage.save({
      key: Storage,
      id: obj.Id,
      data: obj,
    });
    await global.storage
      .load({
        key: Storage,
        id: obj.Id,
        autoSync: true,
        syncInBackground: true,
      })
      .then(ret => {
        return ret;
      })
      .catch(onError);
  },
  _retrieveData: async id => {
    var data = await global.storage
      .load({
        key: Storage,
        id: id,
        autoSync: true,
        syncInBackground: true,
      })
      .then(ret => {
        return ret;
      })
      .catch(onError);

    return toModel(data);
  },
  _getAll: async () => {
    var data = await global.storage
      .getAllDataForKey(Storage)
      .then(encomendas => {
        return encomendas;
      });

    return data.map(toModel);
  },
  _delete: async id => {
    global.storage.remove({
      key: Storage,
      id: id,
    });
  },
};
