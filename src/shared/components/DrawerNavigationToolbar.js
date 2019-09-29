import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {wp, hp} from './Responsive';
import ThemeContext from '../Themes/ThemeContext';
import NavigationDrawerLeftHeader from './NavigationDrawerLeftHeader';
import NavigationDrawerTitle from './NavigationDrawerTitle';
import NavigationDrawerRightHeader from './NavigationDrawerRightHeader';

export default class DrawerNavigationToolbar extends Component {
  static contextType = ThemeContext;

  render() {
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '8%',
        width: wp('100%'),
        backgroundColor: this.context.theme.primaryColor,
      },
    });

    return (
      <View style={[styles.container]}>
        <NavigationDrawerLeftHeader {...this.props} />
        <NavigationDrawerTitle {...this.props} />
        <NavigationDrawerRightHeader {...this.props} />
      </View>
    );
  }
}
