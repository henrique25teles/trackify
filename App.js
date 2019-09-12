import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const initialState = {
  data: [],
};

export default function App() {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    axios
      .get('https://www.websro.com.br/detalhes.php?P_COD_UNI=LL660974473CN')
      .then(function(response) {
        const indiceInicial = response.data.indexOf('<tbody>');
        const indiceFinal = response.data.indexOf('</tbody>');

        const tabela = response.data.substring(indiceInicial, indiceFinal);

        const tabelaArray = tabela.split("<tr><td valign='top'>");
        tabelaArray.shift();

        let dataArray = [];

        tabelaArray.forEach(element => {
          const itemArray = element.split('\n');
          const itemObjeto = {
            data: itemArray[0]
              .split('<br>')
              .join(' ')
              .trim(),
            local: itemArray[1]
              .substring(
                itemArray[1].indexOf('>') + 1,
                itemArray[1].indexOf('</'),
              )
              .split('/')
              .join(' ')
              .trim(),
            status: itemArray[2]
              .substring(
                itemArray[2].indexOf('g>') + 2,
                itemArray[2].indexOf('</strong><br>'),
              )
              .trim(),
            registro: itemArray[4]
              .substring(0, itemArray[4].indexOf('</td>'))
              .trim(),
          };

          dataArray.push(itemObjeto);
        });

        setstate({
          data: dataArray,
        });
      });
  }, []);

  return (
    <View style={styles.Container}>
      <FlatList
        data={state.data}
        renderItem={({item}) => {
          return (
            <View style={styles.ListaItem}>
              <Text style={styles.Texto}>{item.data}</Text>
              <Text style={styles.Texto}>{item.local}</Text>
              <Text style={styles.Texto}>{item.status}</Text>
              <Text style={styles.Texto}>{item.registro}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => `list-item-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
