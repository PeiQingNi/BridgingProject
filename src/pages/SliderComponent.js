import React from 'react';
import {View, Slider} from 'react-native';

export default class SliderComponent extends React.Component {
  _onSlidingComplete = value => {
    console.log('value =>', value);
  };

  _onValueChange = value => {
    console.log('value =>>', value);
  };

  render() {
    return (
      <View>
        <Slider
          maximumValue={1}
          minimumValue={0}
          onSlidingComplete={this._onSlidingComplete}
          onValueChange={this._onValueChange}
        />
      </View>
    );
  }
}
