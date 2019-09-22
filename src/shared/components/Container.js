/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

export default class Container extends Component {
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
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      application: {
        width: wp('100%'),
        height: hp('100%'),
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.application}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
