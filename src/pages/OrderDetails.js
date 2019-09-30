import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Badge} from 'react-native-elements';
import ThemeContext from '../shared/Themes/ThemeContext';
import ShimmerListItem from '../shared/components/ShimmerListItem';
import {format as formatDate} from 'date-fns';
import localeBr from 'date-fns/locale/pt-BR'
import Timeline from 'react-native-timeline-flatlist';

export default class Home extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      data: this.props.navigation.getParam('data') || [],
    };
  }

  componentDidMount() {
    this.carregaDados();
  }

  dataToTimeLine = () => {
    const dados = this.state.data.map(item => {
      const data = formatDate(item.LastDate, "dd ' de ' LLLL 'de' yyyy", {
        locale: localeBr,
      });
      return {
        title: item.Status,
        description: `${item.Local}\n${item.Register}\n${data}`,
        local: item.Local,
        register: item.Register,
        date: formatDate(item.LastDate, 'dd/MM/yyyy', {locale: localeBr}),
        hour: formatDate(item.LastDate, 'HH:mm', {locale: localeBr}),
      };
    });
    return dados;
  };

  carregaDados() {
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 1200);
  }

  keyExtractor = (item, index) => index.toString();

  renderLoadingItem = ({item}) => {
    return <ShimmerListItem />;
  };

  render() {
    if (this.state.refreshing) {
      const loadingData = new Array(9).fill(0).map((v, i) => {
        return {item: v, index: i};
      });

      return (
        <FlatList
          keyExtractor={this.keyExtractor.bind(this)}
          data={loadingData}
          renderItem={this.renderLoadingItem}
        />
      );
    } else {
      const data = this.dataToTimeLine();
      return (
        <Timeline
          data={data}
          innerCircle="dot"
          lineColor={this.context.theme.primaryColor}
          options={{
            style: {paddingTop: 5},
          }}
          separator={true}
          renderTime={(rowData, sectionID) => {
            return (
              <View style={styles.dateBadges}>
                <Badge value={rowData.date} status="success" />
                <Badge value={rowData.hour} status="warning" />
              </View>
            );
          }}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  dateBadges: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
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
