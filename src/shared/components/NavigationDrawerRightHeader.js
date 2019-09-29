import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ThemeContext from '../Themes/ThemeContext';
import {wp, hp} from './Responsive';

export default class NavigationDrawerRightHeader extends Component {
  static contextType = ThemeContext;

  render() {
    const styles = StyleSheet.create({
      container: {
        height: hp('8%'),
      },
    });

    return <View style={styles.container} />;
  }
}
