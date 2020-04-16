import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

// Hook 示例
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title={'Click me'} onPress={() => setCount(count + 1)} />
    </View>
  );
}

// 等价的class示例
class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`You clicked ${this.state.count} times`);
  }

  componentDidUpdate() {
    console.log(`You clicked ${this.state.count} times`);
  }

  render() {
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title={'Click me'}
          onPress={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        />
      </View>
    );
  }
}

export default class HookComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Example />
        <Examples />
      </View>
    );
  }
}
