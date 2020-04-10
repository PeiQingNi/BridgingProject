import React from 'react';
import {View, Text, requireNativeComponent} from 'react-native';
const MapView = requireNativeComponent('RNTMap');

export default class MapViewComponent extends React.Component {
  render() {
    return <MapView zoomEnabled={false} style={{flex: 1}} />;
  }
}
