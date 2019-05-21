import React from 'react';
import { View, FlatList } from 'react-native';
import { Checkbox, Text, TouchableOpacity } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';

class Item extends React.PureComponent {

  render() {
    const item = this.props.item;
    const onPress = this.props.onPress;
    return (
      <TouchableOpacity
        onPress={() => onPress && onPress(item)}
        style={styles.container}
      >
        <Checkbox style={styles.checkbox} checked={item.isDone} />
        <Text f12 darkSlateBlue o5={item.isDone} style={styles.text}>{item.task}</Text>
      </TouchableOpacity>
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

export default class extends React.PureComponent {

  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <Item onPress={this.props.onPressItem} item={item} />

  render() {
    const { data, style } = this.props;
    return (
      <FlatList
        data={data}
        style={style}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

}
