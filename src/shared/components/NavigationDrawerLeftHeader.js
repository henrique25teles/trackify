import React, {Component} from 'react';
import propTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import ThemeContext from '../Themes/ThemeContext';
import {wp} from './Responsive';

class NavigationDrawerLeftHeader extends Component {
  static contextType = ThemeContext;
  static propTypes = {
    navigation: propTypes.any.isRequired,
    isBackButton: propTypes.bool.isRequired,
  };

  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        height: '100%',
        width: '14%',
        alignContent: 'center',
        justifyContent: 'center',
      },
      icon: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

    if (this.props.isBackButton) {
      return (
        <Button
          type="clear"
          TouchableComponent={TouchableOpacity}
          containerStyle={styles.container}
          icon={{
            name: 'back',
            type: 'antdesign',
            size: wp('5%'),
            color: this.context.theme.defaultColor,
          }}
          iconStyle={styles.icon}
          onPress={this.goBack.bind(this)}
        />
      );
    } else {
      return (
        <Button
          type="clear"
          TouchableComponent={TouchableOpacity}
          containerStyle={styles.container}
          icon={{
            name: 'menu',
            type: 'entypo',
            size: wp('5%'),
            color: this.context.theme.defaultColor,
          }}
          iconStyle={styles.icon}
          onPress={this.toggleDrawer.bind(this)}
        />
      );
    }
  }
}

export default NavigationDrawerLeftHeader;
