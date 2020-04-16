import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

// todo: Greeting
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}</Text>
      </View>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};

Greeting.defaultProps = {
  name: 'Stranger',
};

// todo: Welcome
class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    name: 'Anna',
  };

  render() {
    return (
      <View>
        <Text>Welcome, {this.props.name}</Text>
      </View>
    );
  }
}

Welcome.propTypes = {
  name: PropTypes.string,
};

// todo: Say
function Say(props) {
  return (
    <View>
      <Text>Say {props.name}</Text>
    </View>
  );
}

Say.propTypes = {
  name: PropTypes.string,
};

Say.defaultProps = {
  name: 'GoodBye',
};

export default class PropTypesComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Greeting name={'John'} />
        <Greeting />
        <Welcome name={'Smith'} />
        <Welcome />
        <Say name={'Hello'} />
        <Say />
      </View>
    );
  }
}
