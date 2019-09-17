/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Container extends Component {
  render() {
    return (
      <View style={styles.Container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fafafa',
    borderRadius: 5,
  },
});
