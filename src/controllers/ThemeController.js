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
      return themes;
    });

    return all;
  }
}
