import React from 'react';
import {View, Image} from 'react-native';

export default class ImageComponent extends React.Component {
  _onLoad = () => {
    console.log('onLoad');
  };

  _onLoadEnd = () => {
    console.log('onLoadEnd');
  };

  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          onLoad={this._onLoad}
          onLoadEnd={this._onLoadEnd}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />
        <Image
          style={{width: 100, height: 100}}
          blurRadius={0}
          resizeMode="cover"
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
        />
      </View>
    );
  }
}
