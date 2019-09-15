import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const geraAvatar = () => {
  return (
    <Avatar
      size="medium"
      rounded
      reverse
      icon={{
        name: 'check-circle',
        color: 'black',
        reverseColor: 'white',
        reverse: true,
        raised: true,
        type: 'font-awesome5',
        size: 55,
      }}
      overlayContainerStyle={styles.avatar}
      activeOpacity={0.7}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'white',
  },
});

export default geraAvatar;
