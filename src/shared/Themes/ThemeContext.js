import React from 'react';

let ThemeColors = {
  primaryColor: '#4096db',
  defaultColor: '#fafafa',
  defaultColorSecondary: '#d4d3cf',
  warningColor: '#ede35a',
  dangerColor: '#f0170c',
};

const createTheme = themeColors => {
  const navigationHeader = {
    NavigationHeader: {
      headerStyle: {
        backgroundColor: themeColors.primaryColor,
      },
      headerTintColor: themeColors.defaultColor,
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
      raised: true,
      buttonStyle: {
        backgroundColor: themeColors.primaryColor,
        elevation: 10,
      },
    },
  };

  const warningButton = {
    WarningButton: {
      raised: true,
      buttonStyle: {
        backgroundColor: themeColors.warningColor,
        elevation: 10,
      },
    },
  };

  const dangerButton = {
    DangerButton: {
      raised: true,
      buttonStyle: {
        backgroundColor: themeColors.dangerColor,
        elevation: 10,
      },
    },
  };

  const modalDefault = {
    ModalDefault: {
      container: {
        style: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      modal: {
        backdropOpacity: 0.6,
        animationInTiming: 800,
        animationOutTiming: 800,
        backdropTransitionInTiming: 800,
        backdropTransitionOutTiming: 800,
        useNativeDriver: true,
        style: {
          flex: 1,
          flexDirection: 'column',
        },
      },
      title: {
        style: {
          shadowColor: 'rgba(0,0,0, .4)', // IOS
          shadowOffset: {height: 1, width: 1}, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: themeColors.primaryColor,
          elevation: 6, //Android
          height: 50,
        },
      },
      titleText: {
        style: {
          fontSize: 25,
        },
      },
      modalContent: {
        style: {
          backgroundColor: themeColors.defaultColor,
          padding: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
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
  };

  return {
    ...navigationHeader,
    ...roundButton,
    ...primaryButton,
    ...warningButton,
    ...dangerButton,
    ...modalDefault,
    ...customDrawerNavigator,
    ...drawerNavigationToolbar,
  };
};

const ThemeContext = React.createContext({...createTheme(ThemeColors)});

export {ThemeColors, createTheme};

export default ThemeContext;
