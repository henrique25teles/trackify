import React from 'react';
import ThemeViewModel, {Storage} from '../models/Themes/ThemeViewModel';

export default class ThemeController {
  static async _storeData(obj) {
    await global.storage.save({
      key: Storage,
      id: obj.Name,
      data: obj,
    });
  }

  static async _getAll() {
    const all = await global.storage.getAllDataForKey(Storage).then(themes => {
      // const toModelThemes = themes.map(theme => {
      //   return new ThemeViewModel({

      //   });
      // })
      return themes;
    });

    return all;
  }
}
