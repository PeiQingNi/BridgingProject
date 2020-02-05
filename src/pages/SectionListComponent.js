import React from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';

export default class SectionListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          title: 'title-1',
          data: [
            {key: 11, title: 'aaaaa'},
            {key: 12, title: 'bbbbb'},
            {key: 13, title: 'ccccc'},
            {key: 14, title: 'ddddd'},
            {key: 15, title: 'eeeee'},
          ],
        },
        {
          title: 'title-2',
          data: [
            {key: 21, title: 'aaaaa'},
            {key: 22, title: 'bbbbb'},
            {key: 23, title: 'ccccc'},
            {key: 24, title: 'ddddd'},
            {key: 25, title: 'eeeee'},
          ],
        },
        {
          title: 'title-3',
          data: [
            {key: 31, title: 'aaaaa'},
            {key: 32, title: 'bbbbb'},
            {key: 33, title: 'ccccc'},
            {key: 34, title: 'ddddd'},
            {key: 35, title: 'eeeee'},
          ],
        },
        {
          title: 'title-4',
          data: [
            {key: 41, title: 'aaaaa'},
            {key: 42, title: 'bbbbb'},
            {key: 43, title: 'ccccc'},
            {key: 44, title: 'ddddd'},
            {key: 45, title: 'eeeee'},
          ],
        },
      ],
    };
  }

  _renderItem = ({item, index, section}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  _ItemSeparatorComponent = () => {
    return <View style={styles.separator} />;
  };

  _renderSectionHeader = ({section}) => {
    const {title} = section;
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  _renderSectionFooter = ({section}) => {
    const {title} = section;
    return (
      <View style={styles.sectionFooter}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  render() {
    const {dataList} = this.state;
    return (
      <SectionList
        sections={dataList}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._ItemSeparatorComponent}
        renderSectionHeader={this._renderSectionHeader}
        renderSectionFooter={this._renderSectionFooter}
        stickySectionHeadersEnabled={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 15,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'gray',
  },
  sectionHeader: {
    height: 30,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
  },
  sectionFooter: {
    height: 30,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
  },
});
