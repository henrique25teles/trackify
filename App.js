import React from 'react';
import Routes from './src/shared/routes';
import {
  DrawerNavigatorItems,
  createDrawerNavigator,
} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, ScrollView} from 'react-native';
import ProfileCard from './src/shared/components/ProfileCard';

const CustomNavigation = props => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <ProfileCard />
        <DrawerNavigatorItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const NavigatorConfig = {
  contentComponent: props => <CustomNavigation {...props} />,
};

const Navigator = createDrawerNavigator(Routes, NavigatorConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default createAppContainer(Navigator);
