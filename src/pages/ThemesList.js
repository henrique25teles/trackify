import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import ThemeController from '../controllers/ThemeController';
import ThemeContext from '../shared/Themes/ThemeContext';

class ThemesList extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      themes: [{}],
    };
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  selectItem = item => {
    const themes = this.state.themes.map(x => {
      if (x.Name === item.Name) {
        x.IsSelected = true;
      } else {
        x.IsSelected = false;
      }

      return x;
    });

    this.setState({themes}, () => {
      this.context.changeTheme(item);
    });
  };

  renderItem = ({item}) => {
    return (
      <ListItem
        title={item.Name}
        subtitle={item.IsSelected ? 'Selecionado' : ''}
        onPress={() => this.selectItem(item)}
        bottomDivider
        chevron
      />
    );
  };

  componentDidMount() {
    this.loadThemes();
  }

  async loadThemes() {
    const themes = await ThemeController._getAll();
    this.setState({themes});
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <FlatList
        data={this.state.themes}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ThemesList;
