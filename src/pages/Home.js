import RoutesConfig from '../routes/Home/routes';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const HomeNavigator = createStackNavigator(RoutesConfig, {
  initialRouteName: 'Orders',
});

export default createAppContainer(HomeNavigator);
