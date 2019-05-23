import React from 'react';
import { SectionList } from 'react-native';
import { Todo, Text } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';


export default class extends React.PureComponent {

  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <Todo onPress={this.props.onPressItem} data={item} />

  _renderHeader = ({ section: { title } }) => (
    <Text f12 fontBook o5 darkSlateBlue style={styles.header}>{title}</Text>
  )

  render() {
    const { data, style } = this.props;
    return (
      <SectionList
        sections={data}
        style={style}
        stickySectionHeadersEnabled={false}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderHeader}
      />
    );
  }

}


const styles = ScaledSheet.create({
  header: {
    marginTop: 16,
    marginLeft: Sizes.Margin,
  },
});
