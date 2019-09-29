import {ObjectModel, ArrayModel} from 'objectmodel';
import OrderDetail from './OrderDetail';

const Storage = '@Orders';

export {Storage};

export default ObjectModel({
  Id: String,
  Name: String,
  Delivered: Boolean,
  TrackingCode: String,
  Detalhes: ArrayModel(OrderDetail),
});
