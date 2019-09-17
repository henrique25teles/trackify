import React from 'react';
import Start from './src/Start';

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

global.storage = new Storage({
  // maximum capacity, default 1000
  size: 3000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export default () => {
  return <Start />;
};
