import React from 'react';
import ThemesList from '../../pages/ThemesList';
import ThemeAdd from '../../pages/ThemeAdd';
import {ThemeColors} from '../../shared/Themes/ThemeContext';
import DrawerStructure from '../../shared/components/DrawerStructure';

const routes = {
  ThemesList: {
    screen: ThemesList,
    navigationOptions: ({navigation}) => ({
      title: 'Temas',
      headerLeft: <DrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: ThemeColors.primaryColor,
      },
      headerTintColor: ThemeColors.defaultColor,
    }),
  },
  ThemeAdd: {
    screen: ThemeAdd,
    navigationOptions: ({navigation}) => ({
      title: 'Adicionar Tema',
      headerStyle: {
        backgroundColor: ThemeColors.primaryColor,
      },
      headerTintColor: ThemeColors.defaultColor,
    }),
  },
};

export default routes;
