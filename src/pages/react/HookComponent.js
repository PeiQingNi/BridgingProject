import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../component/Button';

// todo: Hook 示例
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
    <>
      <View style={styles.content}>
        <Text style={styles.text}>You clicked {count_1} times</Text>
        <Button
          title={'Click me'}
          style={styles.button}
          onPress={() => setCount_1(count_1 + 1)}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>number: {count_2}</Text>
        <Button
          title={'Clicks'}
          style={styles.button}
          onPress={() => setCount_2(count_2 + 2)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
  },

  button: {
    marginVertical: 10,
    marginRight: 10,
  },
});

// todo: class demo
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
      <View style={styles.content}>
        <Text style={styles.text}>You clicked {this.state.count} times</Text>
        <Button
          title={'Click me'}
          style={styles.button}
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
