import React from 'react';
import {
  Image, View, ScrollView, Switch
} from 'react-native';
import {
  Container, Header, TopView, Text
} from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import Avatar from '@src/assets/icons/avatar.jpg';

type Props = {
  text?: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

class Row extends React.PureComponent<Props> {

  render() {
    const { text, value, onValueChange } = this.props;
    return (
      <View style={styles.row}>
        <Text f12 fontBook darkSlateBlue style={styles.rowText}>{text}</Text>
        <Switch
          style={styles.rowSwitch}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    );
  }

}

class ProfileScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header
          title='PROFILE'
          leftIcon='ios-menu'
          rightIcon='ios-create'
          shadow
        />
        <TopView>
          <Image source={Avatar} style={styles.image} />
          <View style={styles.nameView}>
            <Text fontBlack f24 darkSlateBlue>Tiffany Schneider</Text>
            <Text fontBook f12 darkSlateBlue>tiffany.s@email.com</Text>
          </View>
        </TopView>
        <ScrollView style={styles.scrollView}>
          <Text o5 f12 darkSlateBlue style={styles.title}>Notification Settings</Text>
          <Row
            text='Get email notifications'
          />
          <Row
            text='Vibrate on alert'
          />
          <Text o5 f12 darkSlateBlue style={styles.title}>Floss Settings</Text>
          <Row
            text='Share profile with other floss users'
          />
          <Row
            text='Show your task completion status'
          />
        </ScrollView>
      </Container>
    );
  }

}

const styles = ScaledSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: Sizes.Margin,
  },
  nameView: {
    flex: 1,
    marginLeft: Sizes.Margin,
    marginRight: Sizes.Margin,
  },
  nameText: {

  },
  emailText: {
    marginTop: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    marginVertical: 16,
    marginHorizontal: Sizes.Margin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.Margin,
    paddingVertical: 20,
  },
  rowText: {
    flex: 1,
  },
  rowSwitch: {

  },
});

export default ProfileScreen;
