import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Container from '../shared/components/Container';
import EncomendaController from '../controllers/EncomendaController';
import {ListItem, Avatar, Icon, SearchBar} from 'react-native-elements';

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

  retornaAvatar = () => {
    return (
      <Avatar
        size="medium"
        rounded
        reverse
        icon={{name: 'check-circle', color: '#009019', type: 'font-awesome5'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />
    );
  };

  addEncomenda = () => alert('Esse botão faz nada ainda não fera!');

  keyExtractor = (item, index) => index.toString();

  renderHeader = () => {
    return <SearchBar placeholder="Não adianta digitar..." darkTheme round />;
  };

  renderItem = ({item}) => {
    return (
      <Container>
        <ListItem
          title={item.Name}
          subtitle={item.TrackingCode}
          leftAvatar={this.retornaAvatar()}
          bottomDivider
          chevron
        />
      </Container>
    );
  };

  renderSeparator = () => <View style={styles.Separator} />;

  componentDidMount = () => {
    this.carregaDadosRastreio();
  };

  async carregaDadosRastreio() {
    const data = await EncomendaController.GetObjetoRastreio(
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
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this.renderSeparator}
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
  Separator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
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
