import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import {Text} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';
import ThemeContext from '../Themes/ThemeContext';

export default class NavigationDrawerTitle extends Component {
  static contextType = ThemeContext;
  static propTypes = {
    title: propTypes.string.isRequired,
  };

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
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      },
      title: {
        fontSize: 24,
        color: '#fafafa',
      },
    });

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
