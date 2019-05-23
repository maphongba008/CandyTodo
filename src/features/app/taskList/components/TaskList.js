import React from 'react';
import { FlatList } from 'react-native';
import { Todo } from '@src/components';

export default class extends React.PureComponent {

  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <Todo onPress={this.props.onPressItem} data={item} />

  render() {
    const { data, style } = this.props;
    return (
      <FlatList
        data={data}
        extraData={data.length}
        style={style}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

}
