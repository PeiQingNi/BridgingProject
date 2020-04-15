import React from 'react';
import {View, Text, Button} from 'react-native';

// 函数组件
function Welcome(props) {
  return (
    <View>
      <Text>Welcome {props.name}!</Text>
    </View>
  );
}

// class 组件
class Welcomes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name} = this.props;
    return (
      <View>
        <Text>Welcomes {name}!</Text>
      </View>
    );
  }
}

// 时钟
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View>
        <Text>It is {this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick = () => {
    this.setState(state => {
      return {
        isToggleOn: !state.isToggleOn,
      };
    });
  };

  render() {
    return (
      <Button
        title={this.state.isToggleOn ? 'ON' : 'OFF'}
        onPress={this.handleClick}
      />
    );
  }
}

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
        <Welcome name={'John'} />
        <Welcomes name={'Smith'} />
        <Clock />
        <Toggle />
      </View>
    );
  }
}
