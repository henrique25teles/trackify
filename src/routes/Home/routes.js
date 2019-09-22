import React from 'react';
import Encomendas from '../../pages/Encomendas';
import EncomendaDetalhes from '../../pages/EncomendaDetalhes';
import NavigationDrawerLeftHeader from '../../shared/components/NavigationDrawerLeftHeader';
import {ThemeColors} from '../../shared/Themes/ThemeContext';
import {View} from 'react-native';
import DrawerNavigationToolbar from '../../shared/components/DrawerNavigationToolbar';

const routes = {
  Encomendas: {
    screen: Encomendas,
    navigationOptions: ({navigation, screenProps, navigationOptions}) => ({
      header: props => {
        return <DrawerNavigationToolbar {...props} title="Encomendas" />;
      },
    }),
  },
  EncomendasDetalhes: {
    screen: EncomendaDetalhes,
    navigationOptions: ({navigation}) => ({
      title: 'Detalhes',
      headerStyle: {
        backgroundColor: ThemeColors.primaryColor,
      },
      headerTintColor: ThemeColors.defaultColor,
    }),
  },
};

export default routes;
