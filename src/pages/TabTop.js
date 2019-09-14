import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Encomendas from './Encomendas';

const RoutesConfig = {
  Todos: {
    screen: () => <Encomendas />,
  },
  Pendentes: {
    screen: () => <Encomendas />,
  },
  Entregues: {
    screen: () => <Encomendas />,
  },
};

const TabNavigation = createMaterialTopTabNavigator(RoutesConfig);

export default createAppContainer(TabNavigation);
