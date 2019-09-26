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

  const statusBar = {
    StatusBar: {
      backgroundColor: themeColors.primaryColor,
    },
  };

  const roundButton = {
    RoundButton: {
      buttonStyle: {
        backgroundColor: themeColors.primaryColor,
      },
      iconColor: themeColors.defaultColor,
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

  const deleteSideButton = {
    DeleteSideButton: {
      container: {
        backgroundColor: themeColors.dangerColor,
      },
      icon: {
        color: themeColors.defaultColor,
      },
    },
  };

  return {
    ...container,
    ...statusBar,
    ...roundButton,
    ...primaryButton,
    ...warningButton,
    ...dangerButton,
    ...modalDefault,
    ...customDrawerNavigator,
    ...drawerNavigationToolbar,
    ...deleteSideButton,
  };
};

const ThemeContext = React.createContext({
  theme: createTheme(LightBlue.ColorScheme),
  createTheme,
});

export {createTheme};

export default ThemeContext;
