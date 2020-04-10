import React from 'react';
import {View, Text, Button, StyleSheet, NativeModules} from 'react-native';
const CalendarManager = NativeModules.CalendarManager;

export default class NativeModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text_1: '',
      text_2: '',
    };
  }

  async updateEvents() {
    try {
      const events = await CalendarManager.findEvents();
      console.log('events =>', events);
      this.setState({
        text_2: events,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const {text_1, text_2} = this.state;

    return (
      <View style={styles.body}>
        <Button
          title={'Send Message To Native'}
          onPress={() => {
            CalendarManager.addEvent(
              'Birthday Party',
              '4 Privet Drive, Surrey',
            );
          }}
        />

        <Button
          title={'Send Message To Native'}
          onPress={() => {
            CalendarManager.addEvents('Remap Method', 'React To Native');
          }}
        />

        <Button
          title={'Send Message To Native'}
          onPress={() => {
            CalendarManager.addMoreEvent({
              name: 'Remap Method',
              description: 'React Send Object  To Native ',
            });
          }}
        />

        <Text>{text_1}</Text>
        <Button
          title={'Native Send Message To React'}
          onPress={() => {
            CalendarManager.findEvent((error, event) => {
              if (error) {
                console.error(error);
              } else {
                console.log('event =>', event);
                this.setState({
                  text_1: event,
                });
              }
            });
          }}
        />

        <Text>{text_2}</Text>
        <Button
          title={'Native Send Message To React'}
          onPress={() => {
            this.updateEvents();
          }}
        />

        <Text>{CalendarManager.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
