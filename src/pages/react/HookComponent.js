import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Button from '../../component/Button';

// todo: Hook 示例
/**
 * Hook使用规则
 * 只能在函数最外层调用Hook
 * 只能在 React 的函数组件中调用 Hook。
 */
function ExampleStateEffect() {
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
          onPress={() => setCount_1(state => state + 1)}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>number: {count_2}</Text>
        <Button
          title={'Clicks'}
          style={styles.button}
          onPress={() => setCount_2(state => state + 2)}
        />
      </View>
    </>
  );
}

function ExampleCallBack() {
  const [list, setList] = useState([
    {id: 0, text: 'aaa'},
    {id: 1, text: 'bbb'},
    {id: 2, text: 'ccc'},
    {id: 3, text: 'ddd'},
  ]);

  // 缓存了一个对象
  const status = useMemo(function() {
    return {
      '1': stylec.itemTitle1,
      '2': stylec.itemTitle2,
    };
  }, []);

  const renderItem = useCallback(
    item => {
      const {id, text} = item;
      console.log('status =>', status);
      return (
        <TouchableOpacity onPress={() => console.log('id =>', id)}>
          <View style={stylec.item}>
            <Text>{`id:${id}`}</Text>
            <Text style={id % 2 === 0 ? status['1'] : status['2']}>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [status],
  );

  const itemSeparator = useCallback(() => {
    console.log('ddd');
    return (
      <View
        style={{
          width: '100%',
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#000',
        }}
      />
    );
  }, []);

  const listFooter = useCallback(() => {
    return (
      <TouchableOpacity
        onPress={() => {
          setList(preList => {
            return [...preList, {id: preList.length, text: 'aaa'}];
          });
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{paddingVertical: 10}}>加载更多...</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <FlatList
      data={list}
      renderItem={({item}) => renderItem(item)}
      ItemSeparatorComponent={itemSeparator}
      ListFooterComponent={listFooter}
      keyExtractor={(item, index) => `${item.id}-${index}`}
    />
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

const stylec = StyleSheet.create({
  item: {
    minHeight: 44,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  itemTitle1: {
    color: 'purple',
  },

  itemTitle2: {
    color: 'orange',
  },
});

// todo: class demo
// 等价的class示例
class ExampleClass extends React.Component {
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
        <ExampleStateEffect />
        <ExampleClass />
        <ExampleCallBack />
      </View>
    );
  }
}
