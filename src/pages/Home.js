import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {id: 1, title: 'ActivityIndicatorComponent'},
        {id: 2, title: 'ButtonComponent'},
        {id: 3, title: 'DatePickerIOSComponent'},
        {id: 4, title: 'DrawerLayoutAndroidComponent'},
        {id: 5, title: 'ImageComponent'},
        {id: 6, title: 'ImageBackgroundComponent'},
        {id: 7, title: 'KeyboardAvoidingViewComponent'},
        {id: 8, title: 'MaskedViewIOSComponent'},
        {id: 9, title: 'ModalComponent'},
        {id: 10, title: 'Picker'},
        {id: 11, title: 'PickerIOS'},
        {id: 12, title: 'ProgresssBarAndroid'},
        {id: 13, title: 'ProgressViewIOS'},
        {id: 14, title: 'RefreshControlComponent'},
        {id: 15, title: 'SafeAreaViewComponent'},
        {id: 16, title: 'ScrollViewComponent'},
        {id: 17, title: 'SectionListComponent'},
        {id: 18, title: 'SegmentedControlIOSComponent'},
        {id: 19, title: 'SliderComponent'},
        {id: 20, title: 'StatusBarComponent'},
        {id: 21, title: 'SwitchComponent'},
        {id: 22, title: 'TextComponent'},
        {id: 23, title: 'TextInputComponent'},
        {id: 24, title: 'ToolbarAndroid'},
        {id: 25, title: 'TouchableHighlight'},
        {id: 26, title: 'TouchableNativeFeedback'},
        {id: 27, title: 'TouchableOpacity'},
        {id: 28, title: 'TouchableWithoutFeedback'},
        {id: 29, title: 'ViewComponent'},
        {id: 30, title: 'ViewPagerAndroid'},
        {id: 31, title: 'VirtualizedListComponent'},
        {id: 32, title: 'WebViewComponent'},
        {id: 33, title: 'FlatList'},
      ],
    };
  }

  _didClickItem = path => {
    this.props.navigation.navigate(path);
  };

  // item
  _renderItem = ({item, index, separators}) => {
    // console.log('item =>', item);
    // console.log('index =>', index);
    // console.log('separators =>', separators);
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
