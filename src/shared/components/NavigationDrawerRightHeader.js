import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ThemeContext from '../Themes/ThemeContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

export default class NavigationDrawerRightHeader extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    listenOrientationChange(this);
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: hp('8%'),
      },
    });

    return <View style={styles.container} />;
  }
}
