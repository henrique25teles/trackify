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
        backgroundColor: '#4f92ff',
      },
      headerTintColor: '#fff',
    }),
  },
  EncomendasDetalhes: {
    screen: EncomendaDetalhes,
  },
};

export default routes;
