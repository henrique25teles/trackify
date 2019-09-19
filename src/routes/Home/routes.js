import React from 'react';
import Encomendas from '../../pages/Encomendas';
import EncomendaDetalhes from '../../pages/EncomendaDetalhes';
import DrawerStructure from '../../shared/components/DrawerStructure';
import {ThemeColors} from '../../shared/Themes/ThemeContext';

const routes = {
  Encomendas: {
    screen: Encomendas,
    navigationOptions: ({navigation}) => ({
      title: 'Encomendas',
      headerLeft: <DrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: ThemeColors.primaryColor,
      },
      headerTintColor: ThemeColors.defaultColor,
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
