import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default function APIS(props) {
  const [dataList, setDataList] = React.useState([
    {id: 1, title: 'AccessibilityInfoComponent'},
    {id: 2, title: 'AlertComponent'},
    {id: 3, title: 'AnimatedComponent'},
  ]);

  const _didClickItem = path => {
    props.navigation.navigate(path);
  };

  // item
  const _renderItem = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          _didClickItem(item.title);
        }}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // 分割线
  const _ItemSeparatorComponent = () => {
    return <View style={styles.itemSeparator} />;
  };

  const _keyExtractor = (item, index) => {
    return item.id + '-' + index;
  };

  return (
    <FlatList
      data={dataList}
      renderItem={_renderItem}
      ItemSeparatorComponent={_ItemSeparatorComponent}
      keyExtractor={_keyExtractor}
    />
  );
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
