import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

/**
 * ActivityIndicator 继承了所有View Props
 * animating 是否要显示指示器动画，默认为 true 表示显示，false 则隐藏。
 * color 滚轮的前景颜色（iOS上默认为灰色，安卓上默认为深绿色）。
 * size 指示器的大小，默认为'small'。
 */
export default class ActivityIndicatorComponent extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={'large'} color={'#0000ff'} />
        <ActivityIndicator size={'small'} color={'#0000ff'} />
        <ActivityIndicator size={'large'} color={'#ff0000'} />
        <ActivityIndicator size={'small'} color={'#ff0000'} />
        <ActivityIndicator size={'large'} color={'#00ff00'} animating={true} />
        <ActivityIndicator size={'small'} color={'#00ff00'} animating={false} />
        <ActivityIndicator
          size={'large'}
          color={'#ff00ff'}
          animating={false}
          hidesWhenStopped={false}
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
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
