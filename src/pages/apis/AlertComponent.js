import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

export default function AlertComponent() {
  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: twoButtonCancel,
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {},
          style: 'default',
        },
      ],
      {cancelable: false},
    );
  };

  const createThreeButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => {},
        },
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {},
          style: 'default',
        },
      ],
      {cancelable: false},
    );
  };

  const twoButtonCancel = () => {
    console.log('two button cancel');
  };

  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
