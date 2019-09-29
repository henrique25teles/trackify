import {ObjectModel, ArrayModel} from 'objectmodel';
import Order from './Order';

const Storage = '@OrdersLot';

export {Storage};

export default ObjectModel({
  Id: String,
  Name: String,
  Orders: ArrayModel(Order),
});
