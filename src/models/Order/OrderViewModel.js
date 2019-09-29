import {ObjectModel, ArrayModel} from 'objectmodel';
import OrderDetailViewModel from './OrderDetailViewModel';

const Storage = '@Orders';

export {Storage};

export default ObjectModel({
  Id: String,
  Name: String,
  Delivered: Boolean,
  TrackingCode: String,
  Detalhes: ArrayModel(OrderDetailViewModel),
});
