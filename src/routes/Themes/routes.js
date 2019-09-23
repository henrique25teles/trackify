import React from 'react';
import ThemesList from '../../pages/ThemesList';
import ThemeAdd from '../../pages/ThemeAdd';
import DrawerNavigationToolbar from '../../shared/components/DrawerNavigationToolbar';

const routes = {
  ThemesList: {
    screen: ThemesList,
    navigationOptions: ({navigation, screenProps, navigationOptions}) => ({
      header: props => {
        return <DrawerNavigationToolbar {...props} title="Temas" />;
      },
    }),
  },
  ThemeAdd: {
    screen: ThemeAdd,
    navigationOptions: ({navigation, screenProps, navigationOptions}) => ({
      header: props => {
        return (
          <DrawerNavigationToolbar {...props} isBackButton title="Temas" />
        );
      },
    }),
  },
};

export default routes;
