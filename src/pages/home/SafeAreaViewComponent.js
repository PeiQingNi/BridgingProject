import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

export default class SafeAreaViewComponent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
