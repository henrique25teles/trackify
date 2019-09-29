import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Orders from './Orders';

const RoutesConfig = {
  Todos: {
    screen: () => <Orders />,
  },
  Pendentes: {
    screen: () => <Orders />,
  },
  Entregues: {
    screen: () => <Orders />,
  },
};

const TabNavigation = createMaterialTopTabNavigator(RoutesConfig);

export default createAppContainer(TabNavigation);
