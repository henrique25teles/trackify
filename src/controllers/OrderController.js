import Order, {Storage} from '../models/Order/Order';
import {Alert} from 'react-native';
import OrderDetail from '../models/Order/OrderDetail';

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
  return new Order({
    Id: String(item.Id),
    Name: String(item.Name),
    Delivered: item.Delivered,
    TrackingCode: String(item.TrackingCode),
    Detalhes: item.Detalhes.map(toModelDetalhes),
  });
};

const toModelDetalhes = detalhe => {
  return new OrderDetail({
    Id: String(detalhe.Id),
    LastDate: new Date(detalhe.LastDate),
    Local: String(detalhe.Local),
    Status: String(detalhe.Status),
    Register: String(detalhe.Register),
  });
};

export default {
  _storeData: async obj => {
    console.log(obj);
    console.log(obj.id);
    console.log(Storage);
    await global.storage.save({
      key: Storage,
      id: obj.Id,
      data: obj,
    });
  },
  _retrieveData: async id => {
    var data = await global.storage.load({
      key: Storage,
      id: id,
      autoSync: true,
      syncInBackground: true,
    });

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
