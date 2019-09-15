import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Container from '../shared/components/Container';
import EncomendaService from '../services/EncomendaService';
import {ListItem, Icon, SearchBar} from 'react-native-elements';
import LeftAvatar from '../components/Encomendas/LeftAvatar';
import ListItemSeparator from '../shared/components/ListItemSeparator';
import ListSearchHeader from '../shared/components/ListSearchHeader';

export default class Encomendas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pendents: props.pendents,
      delivered: props.delivered,
    };
    this.keyExtractor = this.keyExtractor.bind(this);
  }

  addEncomenda = () => alert('Esse botão faz nada ainda não fera!');

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
              data: this.state.data.Detalhes,
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

  async carregaDadosRastreio() {
    const data = await EncomendaService.GetRastreioCorreios(
      'LL660974473CN',
      'Encomenda',
    );
    this.setState({
      data: data,
    });
  }

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
        />
        <Icon
          name="add"
          containerStyle={styles.botao}
          onPress={this.addEncomenda}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ViewTeste: {
    flex: 1,
    backgroundColor: '#2599aa',
  },
  botao: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#ff0000',
    borderRadius: 30,
    elevation: 8,
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
