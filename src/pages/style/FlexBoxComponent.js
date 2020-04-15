import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

class BoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {style, index} = this.props;
    return (
      <View style={{...style}}>
        <Text>{index}</Text>
      </View>
    );
  }
}

export default class FlexBoxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        {/*单项目*/}
        <Text>单项目</Text>
        <View style={styles.body}>
          <View style={styles.box}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box1]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box2]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box3]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box4]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box5]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box6]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box7]}>
            <BoxItem style={styles.item} index={1} />
          </View>

          <View style={[styles.box, styles.box8]}>
            <BoxItem style={styles.item} index={1} />
          </View>
        </View>

        {/* 双项目 */}
        <Text>双项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box21]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
          </View>

          <View style={[styles.box, styles.box22]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
          </View>

          <View style={[styles.box, styles.box23]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
          </View>

          <View style={[styles.box, styles.box24]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
          </View>

          <View style={[styles.box, styles.box25]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
          </View>

          <View style={[styles.box, styles.box26]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
          </View>

          <View style={[styles.box, styles.box27]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem
              style={{...styles.item, alignSelf: 'flex-end'}}
              index={2}
            />
          </View>

          <View style={[styles.box, styles.box28]}>
            <BoxItem
              style={{...styles.item, alignSelf: 'flex-end'}}
              index={1}
            />
            <BoxItem style={styles.item} index={2} />
          </View>
        </View>

        {/*三项目*/}
        <Text>三项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box31]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>

          <View style={[styles.box, styles.box32]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>

          <View style={[styles.box, styles.box33]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>

          <View style={[styles.box, styles.box34]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>

          <View style={[styles.box, styles.box35]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>

          <View style={[styles.box, styles.box36]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>

          <View style={[styles.box, styles.box37]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={{...styles.item, alignSelf: 'center'}} index={2} />
            <BoxItem
              style={{...styles.item, alignSelf: 'flex-end'}}
              index={3}
            />
          </View>

          <View style={[styles.box, styles.box38]}>
            <BoxItem
              style={{...styles.item, alignSelf: 'flex-end'}}
              index={1}
            />
            <BoxItem style={{...styles.item, alignSelf: 'center'}} index={2} />
            <BoxItem style={styles.item} index={3} />
          </View>
        </View>

        {/* 四项目 */}
        <Text>四项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box42]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box43]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box44]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box45]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box46]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box47]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>

          <View style={[styles.box, styles.box48]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
          </View>
        </View>

        {/* 五项目 */}
        <Text>五项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box51]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
          </View>

          <View style={[styles.box, styles.box52]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
          </View>

          <View style={[styles.box, styles.box53]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
          </View>

          <View style={[styles.box, styles.box54]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
          </View>

          <View style={[styles.box, styles.box55]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
          </View>
        </View>

        {/* 六项目 */}
        <Text>六项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box61]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
            <BoxItem style={styles.item} index={6} />
          </View>

          <View style={[styles.box, styles.box62]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
            <BoxItem style={styles.item} index={6} />
          </View>
        </View>

        {/* 七项目 */}
        <Text>七项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box71]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
            <BoxItem style={styles.item} index={6} />
            <BoxItem style={styles.item} index={7} />
          </View>
        </View>

        {/* 八项目 */}
        <Text>八项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box81]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
            <BoxItem style={styles.item} index={6} />
            <BoxItem style={styles.item} index={7} />
            <BoxItem style={styles.item} index={8} />
          </View>
        </View>

        {/* 九项目 */}
        <Text>九项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box91]}>
            <BoxItem style={styles.item} index={1} />
            <BoxItem style={styles.item} index={2} />
            <BoxItem style={styles.item} index={3} />
            <BoxItem style={styles.item} index={4} />
            <BoxItem style={styles.item} index={5} />
            <BoxItem style={styles.item} index={6} />
            <BoxItem style={styles.item} index={7} />
            <BoxItem style={styles.item} index={8} />
            <BoxItem style={styles.item} index={9} />
          </View>
        </View>
      </ScrollView>
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
    width: 120,
    height: 120,
    backgroundColor: '#000000',
    margin: 1,
  },

  item: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
  },

  box4: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box5: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  box6: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  box7: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  box8: {
    display: 'flex',
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
    justifyContent: 'space-between',
  },

  box25: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box26: {
    display: 'flex',
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
    justifyContent: 'space-between',
  },

  box31: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box32: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box33: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  box34: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  box35: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box36: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  box37: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box38: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box41: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  box42: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  box43: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  box44: {
    display: 'flex',
    flexDirection: 'column-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  box45: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },

  box46: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },

  box47: {
    display: 'flex',
    flexDirection: 'column-reverse',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },

  box48: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },

  box51: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box52: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  box53: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },

  box54: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
  },

  box55: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  box61: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box62: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  box71: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box81: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box91: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
