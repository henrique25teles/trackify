import React, {useContext} from 'react';
import ThemeContext from '../Themes/ThemeContext';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RoundButton = props => {
  const context = useContext(ThemeContext);
  const widthPercent = Math.round(wp('12%'));
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Math.floor(widthPercent / 2),
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: widthPercent,
      height: widthPercent,
      borderRadius: Math.floor(widthPercent / 2),
      elevation: widthPercent,
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: widthPercent,
      height: widthPercent,
    },
  });
  console.log(wp('12%'));
  return (
    <Button
      raised
      TouchableComponent={TouchableOpacity}
      icon={
        props.icon
          ? {
              name: props.icon.name,
              type: props.icon.type || null,
              color: context.theme.RoundButton.iconColor,
            }
          : null
      }
      title={props.title || null}
      containerStyle={[styles.container, props.containerStyle]}
      buttonStyle={[
        styles.button,
        props.buttonStyle,
        context.theme.RoundButton.buttonStyle,
      ]}
      iconContainerStyle={styles.icon}
      onFocus={props.onFocus || null}
      onBlur={props.onFocus || null}
      onLayout={props.onLayout || null}
      onLongPress={props.onLongPress || null}
      onPress={props.onPress || null}
      onPressIn={props.onPressIn || null}
      onPressOut={props.onPressOut || null}
      style={[props.style]}
    />
  );
};

const PrimaryButton = props => {
  const context = useContext(ThemeContext);

  const styles = StyleSheet.create({
    button: {
      elevation: 10,
    },
  });

  return (
    <Button
      raised
      icon={props.icon || null}
      title={props.title || null}
      buttonStyle={[
        styles.button,
        context.theme.PrimaryButton.buttonStyle,
        props.buttonStyle,
      ]}
      containerStyle={[props.containerStyle]}
      onFocus={props.onFocus || null}
      onBlur={props.onFocus || null}
      onLayout={props.onLayout || null}
      onLongPress={props.onLongPress || null}
      onPress={props.onPress || null}
      onPressIn={props.onPressIn || null}
      onPressOut={props.onPressOut || null}
      style={[props.style]}
    />
  );
};

const WarningButton = props => {
  const context = useContext(ThemeContext);

  const styles = StyleSheet.create({
    button: {
      elevation: 10,
    },
  });

  return (
    <Button
      raised
      icon={props.icon || null}
      title={props.title || null}
      buttonStyle={[
        context.theme.WarningButton.buttonStyle,
        styles.button,
        props.buttonStyle,
      ]}
      containerStyle={[props.containerStyle]}
      onFocus={props.onFocus || null}
      onBlur={props.onFocus || null}
      onLayout={props.onLayout || null}
      onLongPress={props.onLongPress || null}
      onPress={props.onPress || null}
      onPressIn={props.onPressIn || null}
      onPressOut={props.onPressOut || null}
      style={[props.style]}
    />
  );
};

const DangerButton = props => {
  const context = useContext(ThemeContext);

  const styles = StyleSheet.create({
    button: {
      elevation: 10,
    },
  });

  return (
    <Button
      raised
      icon={props.icon || null}
      title={props.title || null}
      buttonStyle={[
        context.theme.DangerButton.buttonStyle,
        styles.button,
        props.buttonStyle,
      ]}
      containerStyle={[props.containerStyle]}
      onFocus={props.onFocus || null}
      onBlur={props.onFocus || null}
      onLayout={props.onLayout || null}
      onLongPress={props.onLongPress || null}
      onPress={props.onPress || null}
      onPressIn={props.onPressIn || null}
      onPressOut={props.onPressOut || null}
      style={[props.style]}
    />
  );
};

export {RoundButton, PrimaryButton, WarningButton, DangerButton};
