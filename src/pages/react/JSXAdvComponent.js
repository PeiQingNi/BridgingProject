import React from 'react';
import {View, Text} from 'react-native';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <Text>Imagine a {props.color} datepicker here.</Text>;
  },
};

function PhotoStory(props) {
  return <Text>{props.story}</Text>;
}

function VideoStory(props) {
  return <Text>{props.story}</Text>;
}

function Story(props) {
  const comments = {
    photo: PhotoStory,
    video: VideoStory,
  };
  const SpecificStory = comments[props.storyType];
  return <SpecificStory story={props.story} />;
}

class JSXAdvComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <MyComponents.DatePicker color={'blue'} />
        <Story storyType={'photo'} story={'photo'} />
        <Story storyType={'video'} story={'video'} />
      </View>
    );
  }
}

export default JSXAdvComponent;
