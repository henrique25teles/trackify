import Home from '../pages/Home';
import Settings from '../pages/Settings';
import About from '../pages/About';
import Themes from '../pages/Themes';

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
  Themes: {
    screen: Themes,
    navigationOptions: {
      drawerLabel: 'Temas',
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
