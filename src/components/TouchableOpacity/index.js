import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export default class extends React.PureComponent<TouchableOpacityProps> {

  render() {
    const { style, disabled } = this.props;
    const newStyle = [style, disabled ? { opacity: 0.5 } : undefined];
    return <TouchableOpacity activeOpacity={0.7} {...this.props} style={newStyle} />;
  }

}
