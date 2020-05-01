import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

function Button(props) {
  const {title, style, onPress, titleStyle} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btnContent, style]}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.function,
  titleStyle: PropTypes.object,
};

Button.defaultProps = {
  title: '按钮',
};

const styles = StyleSheet.create({
  btnContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    minWidth: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
});

export default Button;
