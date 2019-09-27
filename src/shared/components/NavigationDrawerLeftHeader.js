import React, {Component} from 'react';
import propTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import ThemeContext from '../Themes/ThemeContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

class NavigationDrawerLeftHeader extends Component {
  static contextType = ThemeContext;
  static propTypes = {
    isBackButton: propTypes.bool.isRequired,
  };

  componentDidMount() {
    listenOrientationChange(this);
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        height: hp('8%'),
        width: wp('12%'),
        alignContent: 'center',
        justifyContent: 'center',
      },
      icon: {
        height: hp('8%'),
        width: wp('12%'),
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
            color: this.context.theme.NavigationDrawerLeftHeader.iconColor,
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
            color: this.context.theme.NavigationDrawerLeftHeader.iconColor,
          }}
          iconStyle={styles.icon}
          onPress={this.toggleDrawer.bind(this)}
        />
      );
    }
  }
}

export default NavigationDrawerLeftHeader;
