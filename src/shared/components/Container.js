/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';
import ThemeContext from '../Themes/ThemeContext';

export default class Container extends Component {
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        backgroundColor: this.context.theme.defaultColor,
      },
      application: {
        width: wp('100%'),
        height: hp('100%'),
      },
    });

    return (
      <>
        <StatusBar backgroundColor={this.context.theme.primaryColor} />
        <View style={[styles.container]}>
          <View style={styles.application}>
            {this.props.children}
          </View>
        </View>
      </>
    );
  }
}
