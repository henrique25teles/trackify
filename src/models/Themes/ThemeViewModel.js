import {ObjectModel, ArrayModel} from 'objectmodel';
import ColorSchemeViewModel from './ColorSchemeViewModel';

const Storage = '@Themes';

export {Storage};

export default ObjectModel({
  Name: String,
  IsDeletable: Boolean,
  IsSelected: Boolean,
  ColorScheme: ColorSchemeViewModel,
});
