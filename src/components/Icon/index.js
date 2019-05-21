import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { ScaledSheet } from 'rn-scaled-sheet';
import Colors from '@src/constants/Colors';

type Props = {
  name: string;
  color?: string;
  white?: boolean;
  darkSlateBlue?: boolean;
  style?: any;
  f16?: boolean;
  f20?: boolean;
  f25?: boolean;
  f40?: boolean;
}

export default class extends React.PureComponent<Props> {
  render() {
    const iconStyle = Object.keys(this.props).filter(key => this.props[key]).map(key => styles[key]).filter(t => t);
    return <Ionicon {...this.props} style={[iconStyle, this.props.style]} />;
  }
}

const styles = ScaledSheet.create({
  white: {
    color: '#FFF',
  },
  f16: {
    fontSize: 16,
  },
  f20: {
    fontSize: 20,
  },
  f25: {
    fontSize: 25,
  },
  f40: {
    fontSize: 40,
  },
  darkSlateBlue: {
    color: Colors.darkSlateBlue,
  },
});
