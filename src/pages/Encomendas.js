import React, {Component} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native';
import Container from '../shared/components/Container';
import {ListItem} from 'react-native-elements';
import LeftAvatar from '../components/Encomendas/LeftAvatar';
import ListItemSeparator from '../shared/components/ListItemSeparator';
import ListSearchHeader from '../shared/components/ListSearchHeader';
import ButtonAdd from '../components/Encomendas/ButtonAdd';
import EncomendaController from '../controllers/EncomendaController';

export default class Encomendas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pendents: props.pendents,
      delivered: props.delivered,
      refreshing: true,
    };
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
    return (
      <Container>
        <ListItem
          title={item.Name}
          subtitle={item.TrackingCode}
          leftAvatar={LeftAvatar}
          onPress={() =>
            this.props.navigation.navigate('EncomendasDetalhes', {
              data: item.Detalhes,
            })
          }
          bottomDivider
          chevron
        />
      </Container>
    );
  };

  componentDidMount = () => {
    this.carregaDadosRastreio();
  };

  renderRefresh = () => {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.carregaDadosRastreio}
      />
    );
  };

  carregaDadosRastreio = async () => {
    await this.setState({refreshing: true});

    const data = await EncomendaController._getAll();
    await this.setState({
      data: data,
      refreshing: false,
    });
  };

  render() {
    return (
      <Container>
        <FlatList
          style={styles.ViewTeste}
          data={this.state.data}
          ListHeaderComponent={ListSearchHeader}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshControl={this.renderRefresh()}
        />
        <ButtonAdd />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ViewTeste: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  fabIcon: {
    fontSize: 40,
    color: 'white',
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
