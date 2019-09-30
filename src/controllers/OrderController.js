import Order, {Storage} from '../models/Order/Order';
import OrderDetail from '../models/Order/OrderDetail';

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
    var data = await global.storage.getAllDataForKey(Storage);
    console.log(data);
    return data.map(toModel);
  },
  _delete: async id => {
    global.storage.remove({
      key: Storage,
      id: id,
    });
  },
};
