import React from 'react';
import {ImageBackground} from 'react-native';

export default class ImageBackgroundComponent extends React.Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        resizeMode={'repeat'}
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
        }}
      />
    );
  }
}
