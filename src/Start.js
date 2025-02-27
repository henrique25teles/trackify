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
import ThemeContext from './shared/Themes/ThemeContext';

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

const CustomDrawerNavigation = props => {
  const context = useContext(ThemeContext);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
        <ProfileCard />
        <DrawerNavigatorItems
          {...props}
          activeTintColor={context.theme.defaultColor}
          activeBackgroundColor={context.theme.primaryColor}
          renderIcon={renderIcon}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const drawerNavigator = createDrawerNavigator(Routes, {
  drawerType: 'front',
  hideStatusBar: false,
  lazy: true,
  unmountInactiveRoutes: true,
  contentComponent: props => <CustomDrawerNavigation {...props} />,
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
  render() {
    return <Navigator />;
  }
}
