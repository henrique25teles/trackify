import React, {Component} from 'react';
import Routes from '../routes/Themes/routes';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const ThemeStack = createStackNavigator(Routes, {
  initialRouteName: 'ThemesList',
});

const Navigator = createAppContainer(ThemeStack);

export default Navigator;
