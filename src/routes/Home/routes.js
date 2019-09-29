import React from 'react';
import Orders from '../../pages/Orders';
import OrderDetails from '../../pages/OrderDetails';
import DrawerNavigationToolbar from '../../shared/components/DrawerNavigationToolbar';

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
      title: 'Detalhes',
      header: props => (
        <DrawerNavigationToolbar {...props} isBackButton title="Detalhes" />
      ),
    }),
  },
};

export default routes;
