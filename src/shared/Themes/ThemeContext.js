import React from 'react';

const ThemeConstants = {
  botao: {
    backgroundColor: '#fafafa',
    color: '#4096db',
  },
  textInput: {
    backgroundColor: '#000',
    fontColor: '#fff',
  },
};

const ThemeContext = React.createContext({ThemeConstants});

export default ThemeContext;
