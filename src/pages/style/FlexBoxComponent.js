import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

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

        {/* 双项目 */}
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
            <View style={{...styles.item, alignSelf: 'flex-end'}} />
            <View style={styles.item} />
          </View>
        </View>

        {/*三项目*/}
        <Text>三项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box31]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box32]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box33]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box34]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box35]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box36]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box37]}>
            <View style={styles.item} />
            <View style={{...styles.item, alignSelf: 'center'}} />
            <View style={{...styles.item, alignSelf: 'flex-end'}} />
          </View>

          <View style={[styles.box, styles.box38]}>
            <View style={{...styles.item, alignSelf: 'flex-end'}} />
            <View style={{...styles.item, alignSelf: 'center'}} />
            <View style={styles.item} />
          </View>
        </View>

        {/* 四项目 */}
        <Text>四项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box42]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box43]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box44]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box45]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box46]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box47]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>

          <View style={[styles.box, styles.box48]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>
        </View>

        {/* 五项目 */}
        <Text>五项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>
        </View>

        {/* 六项目 */}
        <Text>六项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>
        </View>

        {/* 七项目 */}
        <Text>七项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>
        </View>

        {/* 八项目 */}
        <Text>八项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
          </View>
        </View>

        {/* 九项目 */}
        <Text>九项目</Text>
        <View style={styles.body}>
          <View style={[styles.box, styles.box41]}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
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
    width: 100,
    height: 100,
    backgroundColor: '#000000',
    margin: 1,
  },

  item: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    // margin: 5,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  box35: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box36: {
    display: 'flex',
    flexDirection: 'column',
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
    flexDirection: 'column',
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
    flexDirection: 'column',
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
});
