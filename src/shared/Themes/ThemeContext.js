import React from 'react';

const ThemeConstants = {
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
      backgroundColor: '#4096db',
    },
  },
  PrimaryButton: {
    raised: true,
  },
  WarningButton: {
    raised: true,
    buttonStyle: {
      backgroundColor: '#ede35a',
      elevation: 10,
    },
  },
  DangerButton: {
    raised: true,
    buttonStyle: {
      backgroundColor: '#f0170c',
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
        backgroundColor: '#4096db',
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
        backgroundColor: '#fafafa',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  drawerMenu: {
    activeTintColor: '#fafafa',
    activeBackgroundColor: '#4096db',
  },
};

const ThemeContext = React.createContext({...ThemeConstants});

export default ThemeContext;
