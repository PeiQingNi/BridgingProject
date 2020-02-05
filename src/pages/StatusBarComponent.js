import React from 'react';
import {View, StatusBar} from 'react-native';

export default class StatusBarComponent extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'} />
        <View>
          <StatusBar barStyle={'dark-content'} />
        </View>
      </View>
    );
  }
}
