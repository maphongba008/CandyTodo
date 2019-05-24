import React from 'react';
import { View, Dimensions } from 'react-native';
import { Icon, TouchableOpacity } from '@src/components';
import { ScaledSheet, scaleSmart } from 'rn-scaled-sheet';
import Colors from '@src/constants/Colors';
import Screens from './Screens';
import NavigationService from './NavigationService';

const { width } = Dimensions.get('window');

const left = (width - scaleSmart(56)) / 2;

const Tabs = [
  {
    key: Screens.TASK_LIST_SCREEN,
    icon: 'ios-list',
  },
  {
    key: Screens.UPCOMING_LIST_SCREEN,
    icon: 'ios-time',
  },
  null,
  {
    key: Screens.NOTIFICATIONS_SCREEN,
    icon: 'ios-notifications-outline',
  },
  {
    key: Screens.PROFILE_SCREEN,
    icon: 'ios-person',
  }
];

export default class extends React.PureComponent {

  render() {
    const { navigation } = this.props;
    const currentScreen = navigation.state.routes[navigation.state.index].routeName;
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {
            Tabs.map((tab) => {
              if (tab === null) {
                return (
                  <View key='-1' style={styles.tabView} />
                );
              }
              const isCurrent = currentScreen === tab.key;
              return (
                <TouchableOpacity key={tab.key} onPress={() => NavigationService.navigate(tab.key)} style={styles.tabView}>
                  <Icon f25 darkSlateBlue name={tab.icon} o5={!isCurrent} />
                  {isCurrent && <View style={styles.indicator} />}
                </TouchableOpacity>
              );
            })
          }
        </View>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(Screens.CREATE_TASK)}
          style={styles.addButton}
        >
          <Icon name='ios-add' white f25 />
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = ScaledSheet.create({
  wrapper: {
    height: 56 + 16,
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: Colors.pink,
  },
  tabView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {

  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    left: `${left}`,
    top: 0,
    width: 56,
    height: 56,
    backgroundColor: Colors.darkSlateBlue,
    borderRadius: 27.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.darkSlateBlue,
  },
});
