import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class GriddingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Text>基本网格布局</Text>
        <View style={styles.body}>
          <View style={styles.box}>
            <View style={styles.item11} />
            <View style={styles.item11} />
          </View>

          <View style={styles.box}>
            <View style={styles.item11} />
            <View style={styles.item11} />
            <View style={styles.item11} />
          </View>

          <View style={styles.box}>
            <View style={styles.item11} />
            <View style={styles.item11} />
            <View style={styles.item11} />
            <View style={styles.item11} />
          </View>
        </View>

        <Text>百分比布局</Text>
        <View style={styles.body}>
          <View style={styles.box}>
            <View style={{...styles.item11, flexGrow: 2}} />
            <View style={styles.item11} />
            <View style={styles.item11} />
          </View>

          <View style={styles.box}>
            <View style={{...styles.item11, flexGrow: 2}} />
            <View style={styles.item11} />
          </View>

          <View style={styles.box}>
            <View style={{...styles.item11, flexGrow: 3}} />
            <View style={{...styles.item11, flexGrow: 7}} />
            <View style={{...styles.item11, flexGrow: 4}} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },

  box: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  item11: {
    backgroundColor: '#00ffff',
    height: 40,
    margin: 5,
    flexGrow: 1,
  },
});
