import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const FancyButton = React.forwardRef((props, ref) => (
  <Button ref={ref} onPress={() => {}}>
    {props.children}
  </Button>
));

const MyComponentMemo = React.memo(props => {
  const {name} = props;
  console.log('memo name =>', name);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
});

const MyComponentNormal = props => {
  const {name} = props;
  console.log('normal name =>', name);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default class RefComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memo: 'John',
      normal: 'Anna',
    };

    this.johnClick = this.johnClick.bind(this);
    this.annaClick = this.annaClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  johnClick() {
    this.setState({memo: 'John'});
  }

  annaClick() {
    this.setState({normal: 'Anna'});
  }

  render() {
    return (
      <View>
        <Button title={'John'} onPress={this.johnClick} />
        <MyComponentMemo name={this.state.memo} />
        <Button title={'Anna'} onPress={this.annaClick} />
        <MyComponentNormal name={this.state.normal} />
      </View>
    );
  }
}
