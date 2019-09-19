import React, {Component, useContext} from 'react';
import Routes from './shared/routes';
import {
  DrawerNavigatorItems,
  createDrawerNavigator,
} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Icon} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, ScrollView} from 'react-native';
import ProfileCard from './shared/components/ProfileCard';
import ThemeContext, {ThemeColors} from './shared/Themes/ThemeContext';

const renderIcon = ({route}) => {
  switch (route.key) {
    case 'Home':
      return <Icon name="home" type="octicon" />;
    case 'Settings':
      return <Icon name="setting" type="antdesign" />;
    case 'Themes':
      return <Icon name="decagram-outline" type="material-community" />;
    case 'About':
      return <Icon name="help-circle" type="feather" />;
  }
};

const CustomNavigation = props => {
  const context = useContext(ThemeContext);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <ProfileCard />
        <DrawerNavigatorItems
          {...props}
          {...context.drawerMenu}
          renderIcon={renderIcon}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const drawerNavigator = createDrawerNavigator(Routes, {
  drawerBackgroundColor: ThemeColors.defaultColor,
  drawerType: 'front',
  hideStatusBar: false,
  lazy: true,
  unmountInactiveRoutes: true,
  contentComponent: props => <CustomNavigation {...props} />,
  contentOptions: {
    activeTintColor: ThemeColors.defaultColor,
    activeBackgroundColor: ThemeColors.primaryColor,
  },
  initialRouteName: 'Home',
  backBehavior: 'initialRoute',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Navigator = createAppContainer(drawerNavigator);

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <ThemeContext.Provider value={{ThemeConstants}}>
      <Navigator />
      // </ThemeContext.Provider>
    );
  }
}
