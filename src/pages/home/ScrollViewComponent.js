import React from 'react';
import {ScrollView, View} from 'react-native';

export default class ScrollViewComponent extends React.Component {
  _onScroll = ({nativeEvent}) => {
    console.log('nativeEvent =>', nativeEvent);
    const {
      contentInset,
      contentOffset,
      contentSize,
      layoutMeasurement,
      zoomScale,
    } = nativeEvent;
    console.log('contentInset =>', contentInset);
    console.log('contentOffset =>', contentOffset);
    console.log('contentSize =>', contentSize);
    console.log('layoutMeasurement =>', layoutMeasurement);
    console.log('zoomScale =>', zoomScale);
  };

  _onScrollBeginDrag = () => {
    console.log('onScrollBeginDrag');
  };

  _onScrollEndDrag = () => {
    console.log('onScrollEndDrag');
  };

  render() {
    return (
      <ScrollView
        onScroll={this._onScroll}
        onScrollBeginDrag={this._onScrollBeginDrag}
        onScrollEndDrag={this._onScrollEndDrag}
        stickyHeaderIndices={[0]}>
        <View style={{backgroundColor: '#000000', height: 44}} />
        <View style={{backgroundColor: '#ff0000', height: 500}} />
        <View style={{backgroundColor: '#00ff00', height: 500}} />
        <View style={{backgroundColor: '#0000ff', height: 500}} />
      </ScrollView>
    );
  }
}
