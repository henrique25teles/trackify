import React from 'react';
import Routes from './shared/routes';
import {
  DrawerNavigatorItems,
  createDrawerNavigator,
} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, ScrollView} from 'react-native';
import ProfileCard from './shared/components/ProfileCard';

const renderIcon = ({route}) => {
  switch (route.key) {
    case 'Home':
      return <Icon name="home" type="octicon" />;
    case 'Settings':
      return <Icon name="setting" type="antdesign" />;
    case 'About':
      return <Icon name="help-circle" type="feather" />;
  }
};

const CustomNavigation = props => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <ProfileCard />
        <DrawerNavigatorItems {...props} renderIcon={renderIcon} />
      </SafeAreaView>
    </ScrollView>
  );
};

const NavigatorConfig = {
  drawerBackgroundColor: '#fafafa',
  drawerType: 'front',
  // edgeWidth: 50,
  hideStatusBar: false,
  lazy: true,
  unmountInactiveRoutes: true,
  contentComponent: props => <CustomNavigation {...props} />,
  contentOptions: {
    //items: '',
    //activeItemKey: '',
    activeTintColor: '#fafafa',
    activeBackgroundColor: '#4096db',
    //inactiveTintColor: '',
    //inactiveBackgroundColor: '',
    //onItemPres: '',
    //itemsContainerStyle: '',
    //itemStyle: '',
    //labelStyle: '',
    //activeLabelStyle: '',
    //inactiveLabelStyle: '',
    //iconContainerStyle: '',
  },
  // navigationOptions: ,
  // defaultNavigationOptions: ,
  initialRouteName: 'Home',
  backBehavior: 'initialRoute',
};

const Navigator = createDrawerNavigator(Routes, NavigatorConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default createAppContainer(Navigator);
