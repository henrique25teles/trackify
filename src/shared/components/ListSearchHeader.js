import React from 'react';
import {SearchBar} from 'react-native-elements';

const renderHeader = props => {
  const {placeholder} = props;

  return (
    <SearchBar
      placeholder={placeholder || 'Não adianta digitar...'}
      darkTheme
      round
    />
  );
};

export default renderHeader;
