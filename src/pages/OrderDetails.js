import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ShimmerListItem from '../shared/components/ShimmerListItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      data: this.props.navigation.getParam('data') || [],
    };
    this.retornaAvatar = this.retornaAvatar.bind(this);
  }

  componentDidMount() {
    this.carregaDados();
  }

  carregaDados() {
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 1200);
  }

  retornaAvatar = () => {
    return (
      <Avatar
        size="medium"
        rounded
        reverse
        icon={{name: 'check-circle', color: '#009019', type: 'font-awesome5'}}
        activeOpacity={0.7}
      />
    );
  };

  keyExtractor = (item, index) => index.toString();

  renderLoadingItem = ({item}) => {
    return <ShimmerListItem />;
  };

  renderItem = ({item}) => {
    return (
      <ListItem
        title={item.Register}
        subtitle={item.Status}
        leftAvatar={this.retornaAvatar()}
        bottomDivider
      />
    );
  };

  render() {
    const loadingData = new Array(9).fill(0).map((v, i) => {
      return {item: v, index: i};
    });

    const data = this.state.refreshing ? loadingData : this.state.data;
    const items = this.state.refreshing
      ? this.renderLoadingItem
      : this.renderItem;

    return (
      <FlatList
        keyExtractor={this.keyExtractor.bind(this)}
        data={data}
        renderItem={items}
      />
    );
  }
}

const styles = StyleSheet.create({
  ViewTeste: {
    flex: 1,
    backgroundColor: '#2599aa',
  },
  ListaItem: {
    borderStyle: 'solid',
    borderColor: 'rgb(12, 12, 18)',
    borderWidth: 1,
    flexDirection: 'column',
  },
  Texto: {
    fontSize: 16,
  },
});
