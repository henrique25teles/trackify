import React from 'react';
import Encomendas from '../../pages/Encomendas';
import EncomendaDetalhes from '../../pages/EncomendaDetalhes';
import DrawerStructure from '../../shared/components/DrawerStructure';

const routes = {
  Encomendas: {
    screen: Encomendas,
    navigationOptions: ({navigation}) => ({
      headerLeft: <DrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4096db',
      },
      headerTintColor: '#fafafa',
    }),
  },
  EncomendasDetalhes: {
    screen: EncomendaDetalhes,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#4096db',
      },
      headerTintColor: '#fafafa',
    }),
  },
};

export default routes;
