import React, {useContext} from 'react';
import ThemeContext from '../Themes/ThemeContext';
import {Button} from 'react-native-elements';

const RoundButton = props => {
  const context = useContext(ThemeContext);
  return <Button {...context.RoundButton} {...props} />;
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
