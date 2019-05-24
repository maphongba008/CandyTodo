import React from 'react';
import {
  View, Image, ScrollView, Alert
} from 'react-native';
import { TouchableOpacity, Text } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import AppStore from '@src/features/stores/AppStore';
import Sizes from '@src/constants/Sizes';
import NavigationService from './NavigationService';
import Screens from './Screens';

class Row extends React.Component {

  render() {
    const { text, textStyle, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={rowStyles.container}>
        <Text darkSlateBlue f12 fontBook style={[rowStyles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }

}

const rowStyles = ScaledSheet.create({
  container: {
    paddingHorizontal: Sizes.Margin,
    paddingVertical: 20,
  },
  text: {

  },
});

const Items = [
  {
    target: Screens.TASK_LIST_SCREEN,
    text: 'To-do',
  },
  {
    target: Screens.UPCOMING_LIST_SCREEN,
    text: 'Scheduler',
  },
  {
    target: Screens.NOTIFICATIONS_SCREEN,
    text: 'Notifications',
  },
  {
    target: Screens.PROFILE_SCREEN,
    text: 'Profile',
  }
];

export default class extends React.Component {

  _onPressLogout = () => {
    NavigationService.closeDrawer();
    Alert.alert('Logout', 'Do you want to logout?', [
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          AppStore.logout();
          NavigationService.navigate(Screens.LOGIN_SCREEN);
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      }
    ]);
  }

  render() {
    const user = AppStore.user;
    if (!user) {
      return <View />;
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text f24 darkSlateBlue fontBlack style={styles.nameText}>{user.firstName}</Text>
        </View>
        {
          Items.map(({ target, text }) => (
            <Row
              key={text}
              text={text}
              onPress={() => NavigationService.navigateAndCloseDrawer(target)}
            />
          ))
        }
        <Row
          text='Logout'
          textStyle={{ color: 'red' }}
          onPress={this._onPressLogout}
        />
      </ScrollView>
    );
  }

}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.Margin,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(36, 59, 107, 0.2)',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  nameText: {
    flex: 1,
    marginLeft: 16,
  },
});
