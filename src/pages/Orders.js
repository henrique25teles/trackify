import React, {Component} from 'react';
import {StyleSheet, FlatList, RefreshControl, Alert} from 'react-native';
import LeftAvatar from '../components/Order/LeftAvatar';
import ListItemSeparator from '../shared/components/ListItemSeparator';
import ListSearchHeader from '../shared/components/ListSearchHeader';
import ButtonAdd from '../components/Order/ButtonAdd';
import OrderController from '../controllers/OrderController';
import ListItemCommon, {
  DeleteSideButton,
} from '../shared/components/ListItemCommon';
import ShimmerListItem from '../shared/components/ShimmerListItem';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pendents: props.pendents,
      delivered: props.delivered,
      refreshing: true,
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderRightActions = item => {
    return <DeleteSideButton onDelete={() => this.deleteOrder(item.Id)} />;
  };

  deleteOrder = async id => {
    try {
      await OrderController._delete(id);
    } catch (error) {
      Alert.alert('Erro...', error.message);
    } finally {
      this.carregaDadosRastreio();
    }
  };

  renderLoadingItem = ({item}) => {
    return <ShimmerListItem />;
  };

  renderItem = ({item}) => {
    return (
      <ListItemCommon
        renderRightActions={() => this.renderRightActions(item)}
        title={item.Name}
        subtitle={item.TrackingCode}
        leftAvatar={LeftAvatar}
        onPress={() =>
          this.props.navigation.navigate('OrderDetails', {
            data: item.Detalhes,
          })
        }
      />
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

    const data = await OrderController._getAll();
    await this.setState({
      data: data,
    });

    setTimeout(() => {
      this.setState({refreshing: false});
    }, 1500);
  };

  render() {
    const loadingData = new Array(6).fill(0).map((v, i) => {
      return {item: v, index: i};
    });

    const data = this.state.refreshing ? loadingData : this.state.data;
    const items = this.state.refreshing
      ? this.renderLoadingItem
      : this.renderItem;

    return (
      <>
        <FlatList
          style={styles.ViewTeste}
          data={data}
          ListHeaderComponent={ListSearchHeader}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={this.keyExtractor.bind(this)}
          renderItem={items}
          refreshControl={this.renderRefresh()}
        />
        <ButtonAdd
          onPress={() =>
            this.props.navigation.navigate('OrderAdd', {
              updateOrders: this.carregaDadosRastreio.bind(this),
            })
          }
        />
      </>
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
