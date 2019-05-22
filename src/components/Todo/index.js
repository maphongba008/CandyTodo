import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import Text from '../Text';
import Checkbox from '../Checkbox';

export default class Todo extends React.PureComponent {

  render() {
    const item = this.props.data;
    const onPress = this.props.onPress;
    return (
      <View
        style={styles.container}
      >
        <Checkbox onCheckChanged={() => onPress && onPress(item)} style={styles.checkbox} checked={item.isDone} />
        <Text f12 darkSlateBlue o5={item.isDone} style={styles.text}>{item.task}</Text>
      </View>
    );
  }

}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.Margin,
    paddingVertical: 12,
  },
  checkbox: {
    marginRight: 24,
  },
  text: {
    flex: 1,
  },
});
