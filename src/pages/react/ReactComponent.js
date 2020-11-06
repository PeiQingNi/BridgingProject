import React from 'react';
import {View, Text, Button} from 'react-native';

class ReactComponent extends React.Component {
  // 挂载 => 1
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }

  // 挂载 => 2 && 更新 => 1
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return true;
  }

  // 更新 => 2
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 挂载 => 3 && 更新 => 3
  render() {
    console.log('render');
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button
          title={'+'}
          onPress={() =>
            this.setState(preState => ({counter: preState.counter + 1}))
          }
        />
      </View>
    );
  }

  // 挂载 => 4
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 更新 => 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  // 更新 => 5
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 卸载
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default ReactComponent;
