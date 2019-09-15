import React from 'react';
import {View, StyleSheet} from 'react-native';

const renderSeparator = () => <View style={styles.Separator} />;

const styles = StyleSheet.create({
  Separator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },
});

export default renderSeparator;
