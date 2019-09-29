/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import ThemeContext from '../Themes/ThemeContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    //paddingTop: StatusBar.currentHeight,
    //paddingBottom: StatusBar.currentHeight,
  },
  application: {
    width: '100%',
    height: '100%',
  },
});

export default class Container extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <>
        <StatusBar backgroundColor={this.context.theme.primaryColor} />
        <View style={[styles.container, {backgroundColor: this.context.theme.defaultColor}]}>
          <View style={styles.application}>
            {this.props.children}
          </View>
        </View>
      </>
    );
  }
}
