import React, {Component, useContext} from 'react';
import propTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import ThemeContext from '../Themes/ThemeContext';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {wp, hp} from './Responsive';

function DeleteSideButton(props) {
  const context = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: wp('16%'),
      backgroundColor: context.theme.dangerColor,
    },
  });

  return (
    <TouchableOpacity style={[styles.container]} onPress={props.onDelete}>
      <Icon
        name="trash"
        type="evilicon"
        size={wp('10%')}
        color={context.theme.defaultColor}
      />
    </TouchableOpacity>
  );
}

DeleteSideButton.propTypes = {
  onDelete: propTypes.func.isRequired,
};

class ListItemCommon extends Component {
  static contextType = ThemeContext;

  render() {
    const styles = StyleSheet.create({
      container: {
        height: hp('10%'),
        width: '100%',
      },
    });

    return (
      <Swipeable renderRightActions={this.props.renderRightActions}>
        <ListItem
          title={this.props.title || null}
          subtitle={this.props.subtitle || null}
          leftAvatar={this.props.leftAvatar || null}
          onPress={this.props.onPress || null}
          containerStyle={[styles.container, this.props.containerStyle]}
          bottomDivider
          chevron
        />
      </Swipeable>
    );
  }
}

export {DeleteSideButton};

export default ListItemCommon;
