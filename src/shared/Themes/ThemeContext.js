import React from 'react';

const ThemeColors = {
  primaryColor: '#4096db',
  defaultColor: '#fafafa',
  warningColor: '#ede35a',
  dangerColor: '#f0170c',
};

const ThemeConstants = {
  NavigationHeader: {
    headerStyle: {
      backgroundColor: ThemeColors.primaryColor,
    },
    headerTintColor: ThemeColors.defaultColor,
  },
  RoundButton: {
    raised: true,
    containerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    },
    buttonStyle: {
      width: 56,
      height: 56,
      borderRadius: 30,
      elevation: 30,
      backgroundColor: ThemeColors.primaryColor,
    },
  },
  PrimaryButton: {
    raised: true,
    buttonStyle: {
      backgroundColor: ThemeColors.primaryColor,
      elevation: 10,
    },
  },
  WarningButton: {
    raised: true,
    buttonStyle: {
      backgroundColor: ThemeColors.warningColor,
      elevation: 10,
    },
  },
  DangerButton: {
    raised: true,
    buttonStyle: {
      backgroundColor: ThemeColors.dangerColor,
      elevation: 10,
    },
  },
  ModalDefault: {
    container: {
      style: {
        flex: 1,
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
        backgroundColor: ThemeColors.primaryColor,
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
        backgroundColor: ThemeColors.defaultColor,
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  drawerMenu: {
    activeTintColor: ThemeColors.defaultColor,
    activeBackgroundColor: ThemeColors.primaryColor,
  },
};

const ThemeContext = React.createContext({...ThemeConstants});

export {ThemeColors};

export default ThemeContext;
