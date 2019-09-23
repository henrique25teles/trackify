import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Modal from 'react-native-modal';
import ThemeContext from '../Themes/ThemeContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

class ModalDefault extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    listenOrientationChange(this);
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  render() {
    const responsiveStyle = StyleSheet.create({
      modalContent: {
        padding: wp('5%'),
      },
      title: {
        height: hp('5%'),
      },
    });

    return (
      <View style={styles.container}>
        <Modal
          backdropOpacity={0.6}
          animationInTiming={800}
          animationOutTiming={800}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          useNativeDriver={true}
          style={[styles.modal]}
          isVisible={this.props.isVisible}
          onModalHide={this.props.onModalHide}>
          <View
            style={[
              this.context.theme.ModalDefault.title,
              styles.title,
              responsiveStyle.title,
            ]}>
            <Text style={styles.titleText}>{this.props.titleText}</Text>
          </View>
          <View
            style={[
              this.context.theme.ModalDefault.modalContent,
              styles.modalContent,
              responsiveStyle.modalContent,
            ]}>
            {this.props.children}
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    elevation: 6, //Android
  },
  titleText: {
    fontSize: 25,
  },
});

export default ModalDefault;
