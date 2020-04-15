import React from 'react';
import {View, Text} from 'react-native';

export default class JSXIntroComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  formatName(user) {
    if (user) {
      return user.firstName + ' ' + user.lastName;
    }

    return 'World';
  }

  render() {
    const name = 'Josh Perez';
    const user = {
      firstName: 'Josh',
      lastName: 'Perez',
    };
    return (
      <View>
        <Text>hello, {name}</Text>
        <Text>hello, {this.formatName(user)}</Text>
      </View>
    );
  }
}
