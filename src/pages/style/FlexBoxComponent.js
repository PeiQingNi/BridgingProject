import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {black} from 'color-name';

export default class FlexBoxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>单项目</Text>
        <View style={styles.body}>
          <View style={styles.box}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box1]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box2]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box3]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box4]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box5]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box6]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box7]}>
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box8]}>
            <View style={styles.item} />
          </View>
        </View>

        <Text>双项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box21]}>
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box22]}>
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box23]}>
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box24]}>
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box25]}>
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box26]}>
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box27]}>
            <View style={styles.item} />
            <View style={{...styles.item, alignSelf: 'flex-end'}} />
          </View>

          <View style={[styles.box, styles.box28]}>
            <View style={styles.item} />
            <View style={{...styles.item, alignSelf: 'center'}} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: '#000000',
    margin: 1,
  },

  item: {
    width: 10,
    height: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: 5,
  },

  box1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  box2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  box3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  box4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box5: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  box6: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  box7: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  box8: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  box21: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box22: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box23: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  box24: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  box25: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box26: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  box27: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box28: {
    display: 'flex',
    flexDirection: 'row',
  },
});
