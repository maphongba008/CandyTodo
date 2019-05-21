import React from 'react';
import { SectionList, View, Image } from 'react-native';
import { Text } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import IconInfo from '@src/assets/icons/ic_notification.png';

class Item extends React.PureComponent {

  render() {
    const notification = this.props.data;
    return (
      <View
        style={styles.container}
      >
        <Image source={IconInfo} style={styles.checkbox} />
        <Text f12 darkSlateBlue style={styles.text}>{notification.text}</Text>
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
  header: {
    marginTop: 16,
    marginLeft: Sizes.Margin,
  },
});

export default class extends React.PureComponent {

  _keyExtractor = item => String(item.id);

  _renderItem = ({ item }) => <Item data={item} />

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
