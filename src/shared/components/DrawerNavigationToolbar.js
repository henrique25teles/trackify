import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ThemeContext from '../Themes/ThemeContext';
import NavigationDrawerLeftHeader from './NavigationDrawerLeftHeader';
import NavigationDrawerTitle from './NavigationDrawerTitle';
import NavigationDrawerRightHeader from './NavigationDrawerRightHeader';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '8%',
    width: '100%',
  },
});

export default class DrawerNavigationToolbar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: this.context.theme.primaryColor},
        ]}>
        <NavigationDrawerLeftHeader {...this.props} />
        <NavigationDrawerTitle {...this.props} />
        <NavigationDrawerRightHeader {...this.props} />
      </View>
    );
  }
}
