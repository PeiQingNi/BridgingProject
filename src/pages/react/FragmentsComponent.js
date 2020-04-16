import React from 'react';
import {Text} from 'react-native';

function Greeting(props) {
  return (
    <>
      <Text>Hello, {props.name}!</Text>
      <Text>Welcome to React</Text>
    </>
  );
}

export default class FragmentsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Greeting name={'Alla'} />
      </React.Fragment>
    );
  }
}
