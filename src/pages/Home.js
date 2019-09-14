import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Container from '../shared/components/Container';
import HomeController from '../controllers/HomeController';
import {ListItem, Avatar} from 'react-native-elements';

const initialState = {
  data: [],
};

export default function Home() {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    carregaDadosRastreio();
  }, []);

  async function carregaDadosRastreio() {
    const data = await HomeController.GetRastreioCorreios('LL660974473CN');
    setstate({
      data,
    });
  }

  function retornaAvatar() {
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
  }

  const keyExtractor = (item, index) => index.toString();

  function renderItem({item}) {
    return (
      <ListItem
        title={item.registro}
        subtitle={item.status}
        leftAvatar={retornaAvatar()}
        bottomDivider
        chevron
      />
    );
  }

  return (
    <Container>
      <FlatList
        keyExtractor={keyExtractor}
        data={state.data}
        renderItem={renderItem}
      />
    </Container>
  );
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
