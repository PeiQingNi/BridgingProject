import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TextComponent extends React.Component {
  _onLongPress = () => {
    console.log('onLongPress');
  };

  _onPress = () => {
    console.log('onPress');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Bird's Nest</Text>
        <Text style={styles.baseText}>This is not really a bird nest.</Text>
        <Text style={{fontWeight: 'bold'}}>
          I am bold
          <Text style={{color: 'red'}}> and red</Text>
        </Text>
        <Text selectable={true}>
          selectable 决定用户是否可以长按选择文本，以便复制和粘贴。
        </Text>
        <Text ellipsizeMode={'head'} numberOfLines={1}>
          当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰。
        </Text>
        <Text ellipsizeMode={'middle'} numberOfLines={1}>
          当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰。
        </Text>
        <Text ellipsizeMode={'tail'} numberOfLines={1}>
          当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰。
        </Text>
        <Text ellipsizeMode={'clip'} numberOfLines={1}>
          当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰。
        </Text>
        <Text onLongPress={this._onLongPress}>onLongPress</Text>
        <Text onPress={this._onPress}>onPress</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
