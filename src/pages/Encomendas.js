import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import Container from '../shared/components/Container';
import {ListItem} from 'react-native-elements';
import LeftAvatar from '../components/Encomendas/LeftAvatar';
import ListItemSeparator from '../shared/components/ListItemSeparator';
import ListSearchHeader from '../shared/components/ListSearchHeader';
import ButtonAdd from '../components/Encomendas/ButtonAdd';
import EncomendaController from '../controllers/EncomendaController';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

  renderRightDelete = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ff0000',
          height: '100%',
        }}>
        <Text
          style={{
            flex: 1,
            color: '#fafafa',
            fontSize: 30,
          }}>
          Deleta saporra
        </Text>
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <Container>
        <Swipeable
          renderRightActions={this.renderRightDelete}
          containerStyle={{
            alignContent: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'column-reverse'}}>
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
        </Swipeable>
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
