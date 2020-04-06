import React from 'react';
import {View, SegmentedControlIOS, StyleSheet} from 'react-native';

export default class SegmentedControlIOSComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  _onChange = ({nativeEvent}) => {
    console.log('nativeEvent =>', nativeEvent);
    const {selectedSegmentIndex} = nativeEvent;
    this.setState({
      index: selectedSegmentIndex,
    });
  };

  _onValueChange = value => {
    console.log('value =>>', value);
  };

  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={['One', 'Two', 'Three']}
          selectedIndex={this.state.index}
          onChange={this._onChange}
          onValueChange={this._onValueChange}
          tintColor={'#ff0000'}
          style={styles.segment}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  segment: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
});
