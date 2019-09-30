import React, {Component} from 'react';
import {View, Alert, Picker, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Container from '../shared/components/Container';
import OrderService from '../services/OrderService';
import OrderController from '../controllers/OrderController';
import {PrimaryButton} from '../shared/components/Buttons';

export default class OrderAdd extends Component {
  state = {
    name: '',
    trackingCode: '',
    inputFocus: 'description',
    loading: false,
    keyboardType: 'default',
    shippingCompany: 'correios',
    shippingCompanyItems: [
      {label: 'Correios', value: 'correios'},
      {label: 'Total Express', value: 'totalExpress'},
    ],
  };

  trackingCodeRef = React.createRef();

  updateOrders = this.props.navigation.getParam('updateOrders', () => {});

  carregaRastreio() {
    this.setState({loading: true}, this.addRastreio.bind(this));
  }

  async addRastreio() {
    try {
      const rastreio = await OrderService.GetRastreioCorreios(
        this.state.trackingCode,
        this.state.name,
      );

      if (rastreio.result) {
        await OrderController._storeData(rastreio.encomenda);
        this.updateOrders();
        this.props.navigation.pop();
      } else {
        await Alert.alert('', rastreio.message);
        this.setState({loading: false});
      }
    } catch (error) {
      await Alert.alert('', error.message);
      this.setState({loading: false});
    }
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.row}>
              <Input
                label="Descrição"
                placeholder="Fones de ouvido"
                rightIcon={{name: 'description', type: 'materialicon'}}
                disabled={this.state.loading}
                value={this.state.name}
                returnKeyType="next"
                autoFocus={true}
                blurOnSubmit={false}
                onSubmitEditing={() => this.trackingCodeRef.current.focus()}
                onChangeText={text => this.setState({name: text})}
              />
            </View>
            <View style={styles.row}>
              <Input
                ref={this.trackingCodeRef}
                label="Número Rastreio"
                placeholder="NN12345678US"
                rightIcon={{name: 'radar', type: 'material-community'}}
                disabled={this.state.loading}
                value={this.state.trackingCode}
                autoCapitalize="characters"
                maxLength={13}
                keyboardType={this.state.keyboardType}
                onChangeText={text => {
                  this.setState({
                    trackingCode: text,
                    keyboardType:
                      text.length >= 2 && text.length <= 10
                        ? 'numeric'
                        : 'default',
                  });
                }}
              />
            </View>
            <View style={styles.row}>
              <Picker
                selectedValue={this.state.shippingCompany}
                style={styles.selectShipingCompany}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({shippingCompany: itemValue})
                }>
                {this.state.shippingCompanyItems.map((item, index) => (
                  <Picker.Item
                    key={`${index}`}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
            <View style={styles.rowReverse}>
              <PrimaryButton
                title=""
                iconRight={true}
                icon={{
                  name: 'content-save-outline',
                  type: 'material-community',
                }}
                onPress={this.carregaRastreio.bind(this)}
                disabled={this.state.loading}
                loading={this.state.loading}
                loadingProps={{animating: true}}
              />
              <Button
                title=""
                type="outline"
                iconRight={true}
                disabled={this.state.loading}
                icon={{
                  name: 'backspace-outline',
                  type: 'material-community',
                }}
                onPress={() => this.props.navigation.pop()}
              />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: '1%',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
    padding: '1%',
  },
  selectShipingCompany: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: '5%',
    justifyContent: 'flex-start',
  },
});
