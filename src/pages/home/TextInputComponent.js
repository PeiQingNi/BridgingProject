import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class TextInputComponent extends React.Component {
  _onChange = ({eventCount, target, text}) => {
    console.log('eventCount =>', eventCount);
    console.log('target =>', target);
    console.log('text =>', text);
  };

  _onChangeText = text => {
    console.log('text =>', text);
  };

  _onEndEditing = () => {
    console.log('onEndEditing');
  };

  _onFocus = ({nativeEvent}) => {
    console.log('nativeEvent =>', nativeEvent);
  };

  _onKeyPress = ({nativeEvent}) => {
    console.log('nativeEvent =>', nativeEvent);
  };

  render() {
    return (
      <View>
        <TextInput style={styles.input} defaultValue={'TextInput'} />
        <TextInput
          style={styles.input}
          defaultValue={'onChange'}
          onChange={this._onChange}
        />
        <TextInput
          style={styles.input}
          defaultValue={'onChangeText'}
          onChangeText={this._onChangeText}
        />
        <TextInput
          style={styles.input}
          defaultValue={'onEndEditing'}
          onEndEditing={this._onEndEditing}
        />
        <TextInput
          style={styles.input}
          defaultValue={'onFocus'}
          onFocus={this._onFocus}
        />
        <TextInput
          style={styles.input}
          defaultValue={'onKeyPress'}
          onKeyPress={this._onKeyPress}
        />
        <TextInput style={styles.input} defaultValue={'TextInput'} />
        <TextInput style={styles.input} defaultValue={'TextInput'} />
        <TextInput style={styles.input} defaultValue={'TextInput'} />
        <TextInput style={styles.input} defaultValue={'TextInput'} />
        <TextInput style={styles.input} defaultValue={'TextInput'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
});
