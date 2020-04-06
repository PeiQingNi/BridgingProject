import React from 'react';
import {View, Switch} from 'react-native';

export default class SwitchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  _onValueChange = value => {
    console.log('value =>', value);
    this.setState({
      isOn: value,
    });
  };

  render() {
    return (
      <View>
        <Switch
          trackColor={{false: '#ff0000', true: '#00ff00'}}
          onValueChange={this._onValueChange}
          value={this.state.isOn}
        />
      </View>
    );
  }
}
