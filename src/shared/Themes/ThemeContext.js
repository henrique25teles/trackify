import React from 'react';
import {LightBlue} from './DefaultThemeColors';

const createTheme = themeColors => {
  const container = {
    Container: {
      style: {
        backgroundColor: themeColors.defaultColor,
      },
    },
  };

  const roundButton = {
    RoundButton: {
      buttonStyle: {
        backgroundColor: themeColors.primaryColor,
      },
    },
  };

  const primaryButton = {
    PrimaryButton: {
      buttonStyle: {
        backgroundColor: themeColors.primaryColor,
      },
    },
  };

  const warningButton = {
    WarningButton: {
      buttonStyle: {
        backgroundColor: themeColors.warningColor,
      },
    },
  };

  const dangerButton = {
    DangerButton: {
      buttonStyle: {
        backgroundColor: themeColors.dangerColor,
      },
    },
  };

  const modalDefault = {
    ModalDefault: {
      title: {
        backgroundColor: themeColors.primaryColor,
      },
      modalContent: {
        backgroundColor: themeColors.defaultColor,
      },
    },
  };

  const customDrawerNavigator = {
    CustomDrawerNavigation: {
      DrawerNavigatorItems: {
        activeTintColor: themeColors.defaultColor,
        activeBackgroundColor: themeColors.primaryColor,
      },
    },
  };

  const drawerNavigationToolbar = {
    DrawerNavigationToolbar: {
      Container: {
        style: {
          backgroundColor: themeColors.primaryColor,
        },
      },
    },
    NavigationDrawerLeftHeader: {
      iconColor: themeColors.defaultColor,
    },
  };

  return {
    ...container,
    ...roundButton,
    ...primaryButton,
    ...warningButton,
    ...dangerButton,
    ...modalDefault,
    ...customDrawerNavigator,
    ...drawerNavigationToolbar,
  };
};

const ThemeContext = React.createContext({
  theme: createTheme(LightBlue.ColorScheme),
  createTheme,
});

export {createTheme};

export default ThemeContext;
