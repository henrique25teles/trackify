import {ObjectModel, ArrayModel} from 'objectmodel';
import EncomendaDetalhesViewModel from './EncomendaDetalhesViewModel';

export default ObjectModel({
  Id: String,
  Name: String,
  Delivered: Boolean,
  TrackingCode: String,
  Detalhes: ArrayModel(EncomendaDetalhesViewModel),
});
