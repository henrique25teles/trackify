import React, {useContext} from 'react';
import ThemeContext from '../Themes/ThemeContext';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

const RoundButton = props => {
  const context = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp('10%'),
    },
    button: {
      width: wp('10%'),
      height: wp('10%'),
      borderRadius: wp('10%'),
      elevation: wp('10%'),
    },
  });

  return (
    <Button
      raised
      containerStyle={styles.container}
      buttonStyle={[styles.button, context.RoundButton.buttonStyle]}
      {...props}
    />
  );
};

const PrimaryButton = props => {
  const context = useContext(ThemeContext);
  return <Button {...context.PrimaryButton} {...props} />;
};

const WarningButton = props => {
  const context = useContext(ThemeContext);
  return <Button {...context.WarningButton} {...props} />;
};

const DangerButton = props => {
  const context = useContext(ThemeContext);
  return <Button {...context.DangerButton} {...props} />;
};

export {RoundButton, PrimaryButton, WarningButton, DangerButton};
