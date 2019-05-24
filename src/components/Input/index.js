import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';

type Props = {
  title?: string;
  rightText?: string;
  onRightButtonPress?: () => void;
  inputProps?: TextInputProps;
  style?: any;
  inputStyle?: any;
  placeholder?: any;
};

export default class extends React.Component<Props> {

  render() {
    const {
      title, rightText, onRightButtonPress,
      inputProps, inputStyle, style, placeholder,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.titleView}>
          <Text f12 fontBook darkSlateBlue style={styles.title}>{title}</Text>
          {!!rightText && (
            <TouchableOpacity onPress={onRightButtonPress} style={styles.rightButton}>
              <Text f12 fontBook darkSlateBlue style={styles.rightText}>{rightText}</Text>
            </TouchableOpacity>
          )}
        </View>
        <TextInput
          placeholder={placeholder}
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          {...inputProps}
          style={[styles.input, inputStyle]}
        />
      </View>
    );
  }

}


const styles = ScaledSheet.create({
  container: {

  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {

  },
  rightButton: {

  },
  rightText: {
    textDecorationLine: 'underline',
  },
  input: {
    marginTop: 8,
    height: 50,
    borderWidth: 1,
    borderColor: '#ffe6e6',
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
  },
});
