import React from 'react';
import {
  VirtualizedList,
  View,
  Text,
  StyleSheet,
  RefreshControl,
} from 'react-native';

export default class VirtualizedListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {key: 1, title: 'aaaaa'},
        {key: 2, title: 'bbbbb'},
        {key: 3, title: 'ccccc'},
        {key: 4, title: 'ddddd'},
        {key: 5, title: 'eeeee'},
        {key: 6, title: 'fffff'},
        {key: 7, title: 'ggggg'},
        {key: 8, title: 'hhhhh'},
        {key: 9, title: 'iiiii'},
        {key: 10, title: 'jjjjj'},
        {key: 11, title: 'aaaaa'},
        {key: 12, title: 'bbbbb'},
        {key: 13, title: 'ccccc'},
        {key: 14, title: 'ddddd'},
        {key: 15, title: 'eeeee'},
        {key: 16, title: 'fffff'},
        {key: 17, title: 'ggggg'},
        {key: 18, title: 'hhhhh'},
        {key: 19, title: 'iiiii'},
        {key: 20, title: 'jjjjj'},
        {key: 21, title: 'aaaaa'},
        {key: 22, title: 'bbbbb'},
        {key: 23, title: 'ccccc'},
        {key: 24, title: 'ddddd'},
        {key: 25, title: 'eeeee'},
        {key: 26, title: 'fffff'},
        {key: 27, title: 'ggggg'},
        {key: 28, title: 'hhhhh'},
        {key: 29, title: 'iiiii'},
        {key: 30, title: 'jjjjj'},
      ],
      refreshing: false,
    };
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  _getItem = (data, index) => {
    return data[index];
  };

  _getItemCount = data => {
    return data.length;
  };

  _getItemLayout = (data, index) => {
    // console.log('data =>', data);
    // console.log('index =>', index);
    return {length: 1, offset: index * 44, index: index};
  };

  _onEndReached = info => {
    console.log('info =>', info);
  };

  _onRefresh = () => {
    setTimeout(() => {
      this.setState({
        refreshing: true,
      });
      setTimeout(() => {
        this.setState({
          refreshing: false,
        });
      }, 10000);
    }, 1000);
  };

  render() {
    const {dataList, refreshing} = this.state;
    return (
      <VirtualizedList
        renderItem={this._renderItem}
        data={dataList}
        getItem={this._getItem}
        getItemCount={this._getItemCount}
        getItemLayout={this._getItemLayout}
        initialScrollIndex={0}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.1}
        refreshing={refreshing}
        onRefresh={this._onRefresh}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 44,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    marginLeft: 15,
  },
});
