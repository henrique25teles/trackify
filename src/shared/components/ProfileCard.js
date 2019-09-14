import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Button, Card, Icon} from 'react-native-elements';

export default () => {
  return (
    <Card
      image={require('../../images/profileDefault.jpg')}
      imageProps={{resizeMode: 'stretch'}}
      imageStyle={{height: 120}}
      containerStyle={{flex: 1, backgroundColor: '#255075'}}>
      <View style={{flexDirection: 'row'}}>
        <Avatar
          size="small"
          rounded
          icon={{name: 'home', type: 'fontawesome5'}}
        />
        <Text style={{marginBottom: 25, fontSize: 10}}>
          Aqui vai algo relacionado ao perfil
        </Text>
      </View>
      <Button
        icon={
          <Icon
            name="verified-user"
            type="fontawesome5"
            color="#ffffff"
            size={18}
          />
        }
        buttonStyle={{
          borderRadius: 15,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Login"
        titleStyle={{fontSize: 10}}
        size
      />
    </Card>
  );
};
