import React from 'react';
import ThemesList from '../../pages/ThemesList';
import ThemeAdd from '../../pages/ThemeAdd';
import NavigationDrawerLeftHeader from '../../shared/components/NavigationDrawerLeftHeader';

const routes = {
  ThemesList: {
    screen: ThemesList,
    navigationOptions: ({navigation}) => ({
      title: 'Temas',
      headerLeft: <NavigationDrawerLeftHeader navigationProps={navigation} />,
    }),
  },
  ThemeAdd: {
    screen: ThemeAdd,
    navigationOptions: ({navigation}) => ({
      title: 'Adicionar Tema',
    }),
  },
};

export default routes;
