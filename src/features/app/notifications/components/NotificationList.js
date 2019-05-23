import React from 'react';
import {
  SectionList, View, Image, Linking, Platform
} from 'react-native';
import { Text } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import IconInfo from '@src/assets/icons/ic_notification.png';
import Fonts from '@src/constants/Fonts';
import Colors from '@src/constants/Colors';
import ParsedText from 'react-native-parsed-text';

const isAndroid = Platform.OS === 'android';

class Item extends React.PureComponent {

  _renderText = text => text.slice(1, text.length - 1)

  _onPress = () => {
    const notification = this.props.data;
    const url = isAndroid ? notification.androidUrl : notification.iosUrl;
    Linking.canOpenURL(url).then((canOpen) => {
      if (canOpen) {
        Linking.openURL(url);
      }
    });
  }

  render() {
    const notification = this.props.data;
    return (
      <View
        style={styles.container}
      >
        <Image source={IconInfo} style={styles.checkbox} />
        <ParsedText
          style={styles.text}
          parse={
            [
              {
                pattern: /\[.*?\]/i,
                style: [styles.highlight],
                renderText: this._renderText,
                onPress: this._onPress,
              }
            ]
          }
        >
          {notification.text}
        </ParsedText>
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
    fontSize: 12,
    fontFamily: Fonts.BOOK,
    color: Colors.darkSlateBlue,
  },
  highlight: {
    fontFamily: Fonts.BLACK,
    textDecorationLine: 'underline',
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
