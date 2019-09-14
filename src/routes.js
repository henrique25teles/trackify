import React from 'react';
//import Home from './pages/Home';
import About from './pages/About';
import Encomendas from './pages/Encomendas';

const routes = {
  Home: {
    screen: () => <Encomendas />,
  },
  About: {
    screen: () => <About />,
  },
};

export default routes;
