import React from 'react';
import {View, Text, TextInput} from 'react-native';

function RefsComponent() {
  const inputRef = React.createRef();

  const FancyInput = React.forwardRef((props, ref) => (
    <TextInput ref={ref} {...props} />
  ));

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FancyInput
        ref={inputRef}
        placeholder={'请输入'}
        style={{backgroundColor: '#0ff'}}
      />
    </View>
  );
}

export default RefsComponent;
