import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

/** Hook 示例 */
/**
 * Hook使用规则
 * 只能在函数最外层调用Hook
 * 只能在 React 的函数组件中调用 Hook。
 */
function Example() {
  const [count_1, setCount_1] = useState(0);
  const [count_2, setCount_2] = useState(1);

  /** 可以把useEffect Hook看做componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合 */
  // 在默认情况下useEffect在第一次渲染之后和每次更新之后都会执行。
  useEffect(() => {
    console.log(`You clicked ${count_1} times`);
  }, [count_1]);

  useEffect(() => {
    console.log(`count_2 ${count_2}`);
  }, [count_2]);

  return (
    <View>
      <Text>You clicked {count_1} times</Text>
      <Button title={'Click me'} onPress={() => setCount_1(count_1 + 1)} />
      <Text>number: {count_2}</Text>
      <Button title={'Clicks'} onPress={() => setCount_2(count_2 + 2)} />
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
