import React from 'react';
import Encomendas from '../../pages/Encomendas';
import EncomendaDetalhes from '../../pages/EncomendaDetalhes';
import DrawerNavigationToolbar from '../../shared/components/DrawerNavigationToolbar';

const routes = {
  Encomendas: {
    screen: Encomendas,
    navigationOptions: ({navigation, screenProps, navigationOptions}) => ({
      header: props => {
        return (
          <DrawerNavigationToolbar
            {...props}
            isBackButton={false}
            title="Encomendas"
          />
        );
      },
    }),
  },
  EncomendasDetalhes: {
    screen: EncomendaDetalhes,
    navigationOptions: ({navigation}) => ({
      title: 'Detalhes',
      header: props => (
        <DrawerNavigationToolbar {...props} isBackButton title="Detalhes" />
      ),
    }),
  },
};

export default routes;
