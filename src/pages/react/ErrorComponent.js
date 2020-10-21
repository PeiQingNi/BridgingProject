import React from 'react';
import {View, Text, Button} from 'react-native';

class ErrorComponent extends React.Component {
  render() {
    return (
      <View>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </View>
    );
  }
}

export default ErrorComponent;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <View>
          <Text>Something went wrong</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button
          title={'Add'}
          onPress={() => this.setState(({counter}) => ({counter: counter + 1}))}
        />
      </View>
    );
  }
}
