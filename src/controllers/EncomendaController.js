import AsyncStorage from '@react-native-community/async-storage';
import EncomendaViewModel, {
  Storage,
} from '../models/Encomenda/EncomendaViewModel';

export default {
  _storeData: async obj => {
    try {
      await AsyncStorage.setItem(`${Storage}:${obj.Id}`, obj);
    } catch (error) {
      console.log(error);
    }
  },
  _retrieveData: async id => {
    try {
      const value = await AsyncStorage.getItem(id);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  },
  _getAll: async () => {
    const all = await AsyncStorage.multiGet([Storage]);
    console.log(all);
    if (all[0][1]) {
      return all[0][1];
    }

    return [];
  },
};
