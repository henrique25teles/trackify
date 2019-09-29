import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

const initialState = {
  data: [],
};

export default function Home(props) {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    const dados = props.navigation.getParam('data', undefined);
    if (dados) {
      setstate({
        data: dados,
      });
    }
  }, [props.navigation]);

  function retornaAvatar() {
    return (
      <Avatar
        size="medium"
        rounded
        reverse
        icon={{name: 'check-circle', color: '#009019', type: 'font-awesome5'}}
        activeOpacity={0.7}
      />
    );
  }

  const keyExtractor = (item, index) => index.toString();

  function renderItem({item}) {
    return (
      <ListItem
        title={item.Register}
        subtitle={item.Status}
        leftAvatar={retornaAvatar()}
        bottomDivider
        chevron
      />
    );
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={state.data}
      renderItem={renderItem}
    />
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
