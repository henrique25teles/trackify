import React, {Component, useContext} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Text} from 'react-native-elements';
import ThemeContext from '../shared/Themes/ThemeContext';

class About extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.context);
    return (
      <View>
        <Text>Essa é a tela de Sobre</Text>
        <Button title="Adiciona Rastreio" />
        <TextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff2245',
  },
});

export default About;
