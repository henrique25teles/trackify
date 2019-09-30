import React from 'react';
import Orders from '../../pages/Orders';
import OrderDetails from '../../pages/OrderDetails';
import DrawerNavigationToolbar from '../../shared/components/DrawerNavigationToolbar';
import OrderAdd from '../../pages/OrderAdd';

const routes = {
  Orders: {
    screen: Orders,
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
  OrderDetails: {
    screen: OrderDetails,
    navigationOptions: ({navigation}) => ({
      header: props => (
        <DrawerNavigationToolbar {...props} isBackButton title="Detalhes" />
      ),
    }),
  },
  OrderAdd: {
    screen: OrderAdd,
    navigationOptions: ({navigation}) => ({
      header: props => (
        <DrawerNavigationToolbar
          {...props}
          isBackButton
          title="Adicionar Encomenda"
        />
      ),
    }),
  },
};

export default routes;
