import React from 'react';
import {SearchBar} from 'react-native-elements';

const renderHeader = props => {
  return (
    <SearchBar
      placeholder={'Não adianta digitar...'}
      round
      lightTheme
      {...props}
    />
  );
};

export default renderHeader;
