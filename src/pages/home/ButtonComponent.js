import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

/**
 * Button 一个简单的跨平台的按钮组件。可以进行一些简单的定制。这个组件的样式是固定的。
 * onPress 用户点击此按钮时所调用的处理函数
 * title 按钮内显示的文本
 * color 文本的颜色(iOS)，或是按钮的背景色(Android)
 * disabled 设置为 true 时此按钮将不可点击。
 */
export default class ButtonComponent extends React.Component {
  _didClick = () => {
    console.log('did click');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._didClick} title={'按钮一'} color={'#ff0000'} />
        <Button
          onPress={this._didClick}
          title={'按钮二'}
          color={'#00ff00'}
          disabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
