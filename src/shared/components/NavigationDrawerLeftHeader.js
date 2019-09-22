import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import ThemeContext from '../Themes/ThemeContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

class NavigationDrawerLeftHeader extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    listenOrientationChange(this);
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        height: hp('6%'),
        width: wp('8%'),
        alignContent: 'center',
        justifyContent: 'center',
      },
      image: {
        height: hp('5%'),
        width: wp('5%'),
        marginLeft: wp('1%'),
        resizeMode: 'center',
      },
    });

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.toggleDrawer.bind(this)}>
        <Image
          style={styles.image}
          source={require('../../images/drawer.png')}
        />
      </TouchableOpacity>
    );
  }
}

export default NavigationDrawerLeftHeader;
