import Home from '../pages/Home';
import Settings from '../pages/Settings';
import About from '../pages/About';

const routes = {
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Encomendas',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Configurações',
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      drawerLabel: 'Sobre',
    },
  },
};

export default routes;
