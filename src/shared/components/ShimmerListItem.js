import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {hp, wp} from './Responsive';
import {ListItem} from 'react-native-elements';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

class ShimmerListItem extends Component {
  render() {

    return (
      <ListItem
        containerStyle={styles.container}
        leftElement={
          <ShimmerPlaceHolder autoRun={true} style={styles.avatar} />
        }
        title={<ShimmerPlaceHolder autoRun={true} style={styles.title} />}
        subtitle={<ShimmerPlaceHolder autoRun={true} style={styles.subtitle} />}
        chevron={<ShimmerPlaceHolder autoRun={true} style={styles.chevron} />}
        bottomDivider
      />
    );
  }
}

const width = wp('12%');

const styles = StyleSheet.create({
  container: {
    height: hp('10%'),
    width: '100%',
  },
  avatar: {
    height: width,
    width: width,
    borderRadius: width / 2,
  },
  title: {
    width: '50%',
  },
  subtitle: {
    width: '35%',
  },
  chevron: {
    width: '5%',
  },
});

export default ShimmerListItem;
