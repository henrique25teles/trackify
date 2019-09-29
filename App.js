import React, {Component} from 'react';
import {Dimensions, PixelRatio} from 'react-native';
import Start from './src/Start';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import ThemeController from './src/controllers/ThemeController';
import {LightBlue, DarkRed} from './src/shared/Themes/DefaultThemeColors';
import Container from './src/shared/components/Container';
import ThemeContext from './src/shared/Themes/ThemeContext';

global.storage = new Storage({
  size: 3000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export default class App extends Component {
  static contextType = ThemeContext;

  state = {
    themeColors: LightBlue,
    theme: this.context.createTheme(LightBlue.ColorScheme),
    isLoading: true,
  };

  changeTheme = theme => {
    const newTheme = this.context.createTheme(theme.ColorScheme);
    this.setState({theme: newTheme});
  };

  GetAllThemes = async () => {
    const themes = await ThemeController._getAll();
    return themes;
  };

  LoadScreen = async () => {
    const themes = await this.GetAllThemes();

    const isLightBlue = themes.some(x => x.Name === 'LightBlue');
    if (!isLightBlue) {
      await ThemeController._storeData(LightBlue);
    }

    const isDarkRed = themes.some(x => x.Name === 'DarkRed');
    if (!isDarkRed) {
      await ThemeController._storeData(DarkRed);
    }

    this.setState({isLoading: false});
  };

  render() {
    if (this.state.isLoading) {
      this.LoadScreen();
      return <Container />;
    } else {
      console.log(Dimensions.get('window'));
      console.log(PixelRatio.get());
      return (
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            changeTheme: this.changeTheme.bind(this),
          }}>
          <Container>
            <Start />
          </Container>
        </ThemeContext.Provider>
      );
    }
  }
}
