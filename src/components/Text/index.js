import React from 'react';
import { Text as RNText, StyleSheet, TextProperties } from 'react-native';
import Fonts from '@src/constants/Fonts';
import Colors from '@src/constants/Colors';

type Props = {
  style?: any;
  //
  fontBook?: boolean;
  fontBlack?: boolean;
  fontHeavy?: boolean;
  white?: boolean;
  darkSlateBlue?: boolean;
  f12?: boolean;
  f13?: boolean;
  f14?: boolean;
  f15?: boolean;
  f16?: boolean;
  f17?: boolean;
  f18?: boolean;
  f1722?: boolean;
  f20?: boolean;
  f24?: boolean;
  f34?: boolean;
  o9?: boolean;
  o5?: boolean;
  //
  lowercase?: boolean;
  uppercase?: boolean;
  green?: boolean;
} & TextProperties;

export default class Text extends React.PureComponent<Props> {
  render() {
    const {
      style, children, uppercase, lowercase,
    } = this.props;
    const textStyles = Object.keys(this.props).filter(key => this.props[key])
      .map(key => styles[key]).filter(t => t);
    const text = uppercase ? String(children).toUpperCase() : lowercase ? String(children).toLowerCase() : children;
    return (
      <RNText
        {...this.props}
        style={[styles.text, ...textStyles, style]}
      >
        {text}

      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: Fonts.BOOK,
  },
  fontBook: {
    fontFamily: Fonts.BOOK,
  },
  fontBlack: {
    fontFamily: Fonts.BLACK,
  },
  fontHeavy: {
    fontFamily: Fonts.HEAVY,
  },
  white: {
    color: '#FFF',
  },
  f12: {
    fontSize: 12,
  },
  f13: {
    fontSize: 13,
  },
  f14: {
    fontSize: 14,
  },
  f15: {
    fontSize: 15,
  },
  f16: {
    fontSize: 16,
  },
  f17: {
    fontSize: 17,
  },
  f1722: {
    fontSize: 17,
    lineHeight: 22,
  },
  f18: {
    fontSize: 18,
  },
  f20: {
    fontSize: 20,
  },
  f24: {
    fontSize: 24,
  },
  f34: {
    fontSize: 34,
  },
  o5: {
    opacity: 0.5,
  },
  o9: {
    opacity: 0.9,
  },
  green: {
    color: '#5DE054',
  },
  darkSlateBlue: {
    color: Colors.darkSlateBlue,
  },
});
