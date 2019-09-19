import React from 'react';
import Encomendas from '../../pages/Encomendas';
import EncomendaDetalhes from '../../pages/EncomendaDetalhes';
import DrawerStructure from '../../shared/components/DrawerStructure';
import {ThemeColors} from '../../shared/Themes/ThemeContext';

const routes = {
  Encomendas: {
    screen: Encomendas,
    navigationOptions: ({navigation}) => ({
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
      headerStyle: {
        backgroundColor: ThemeColors.primaryColor,
      },
      headerTintColor: ThemeColors.defaultColor,
    }),
  },
};

export default routes;
