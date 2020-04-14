import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default class Reacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }

  _didClickItem = path => {
    this.props.navigation.navigate(path);
  };

  // item
  _renderItem = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this._didClickItem(item.title);
        }}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // 分割线
  _ItemSeparatorComponent = () => {
    return <View style={styles.itemSeparator} />;
  };

  _keyExtractor = (item, index) => {
    return item.id + '-' + index;
  };

  render() {
    const {dataList} = this.state;
    return (
      <View style={styles.body}>
        <FlatList
          data={dataList}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  itemContainer: {
    height: 44,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemTitle: {
    marginLeft: 15,
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: 'gray',
  },
});
