import React from 'react';
import {TextInput, KeyboardAvoidingView} from 'react-native';

export default class KeyboardAvoidingViewComponent extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView enabled={true}>
        <TextInput placeholder={'Text Input'} />
      </KeyboardAvoidingView>
    );
  }
}
