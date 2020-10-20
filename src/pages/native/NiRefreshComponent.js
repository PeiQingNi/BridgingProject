import React from 'react';
import {requireNativeComponent, View} from 'react-native';

const RNTRefreshControl = requireNativeComponent('RNTRefreshControl');

export default class NiRefreshComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RNTRefreshControl
          style={{width: '100%', height: 100, backgroundColor: '#0ff'}}
        />
      </View>
    );
  }
}
