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

// 开关组件
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

function UserGreeting() {
  return (
    <View>
      <Text>Welcome back!</Text>
    </View>
  );
}

function GuestGreeting() {
  return (
    <View>
      <Text>Please sign up.</Text>
    </View>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <Button title={'Login'} onPress={props.onClick} />;
}

function LogoutButton(props) {
  return <Button title={'Logout'} onPress={props.onClick} />;
}

function MyComponent(props) {
  return <Text>{props.children}</Text>;
}

function MyContainer(props) {
  return <View>{props.children}</View>;
}

function MyGroupComponent() {
  return [<Text>aaa</Text>, <Text>bbb</Text>];
}

export default class JSXIntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  formatName(user) {
    if (user) {
      return user.firstName + ' ' + user.lastName;
    }
    return 'World';
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const name = 'Josh Perez';
    const user = {
      firstName: 'Josh',
      lastName: 'Perez',
    };
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <View>
        <Text>hello, {name}</Text>
        <Text>hello, {this.formatName(user)}</Text>
        <Welcome name={'John'} />
        <Welcomes name={'Smith'} />
        <Clock />
        <Toggle />
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        <MyComponent>Hello world!</MyComponent>
        <MyContainer>
          <MyComponent>Hello world!</MyComponent>
          <MyComponent>Hello world!</MyComponent>
        </MyContainer>
        <MyGroupComponent />
      </View>
    );
  }
}
