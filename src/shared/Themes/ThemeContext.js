import React from 'react';
import {LightBlue} from './DefaultThemeColors';

const createTheme = themeColors => {
  return {
    ...themeColors,
  };
};

const ThemeContext = React.createContext({
  theme: createTheme(LightBlue.ColorScheme),
  createTheme,
});

export default ThemeContext;
