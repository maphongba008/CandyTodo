import React from 'react';
import {
  createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator
} from 'react-navigation';
import SplashScreen from '@src/features/splash';
import LoginScreen from '@src/features/authentication/login';
import RegisterScreen from '@src/features/authentication/register';
import TaskListScreen from '@src/features/app/taskList';
import UpcomingListScreen from '@src/features/app/upcomingList';
import NotificationListScreen from '@src/features/app/notifications';
import ProfileScreen from '@src/features/app/profile';
import Screens from './Screens';
import NavigationService from './NavigationService';
// import IntroScreen from '../features/app/intro';

const AuthenStack = createStackNavigator({
  [Screens.LOGIN_SCREEN]: LoginScreen,
  [Screens.REGISTER_SCREEN]: RegisterScreen,
}, {
  headerMode: 'none',
});

const AppStack = createBottomTabNavigator({
  [Screens.TASK_LIST_SCREEN]: TaskListScreen,
  [Screens.UPCOMING_LIST_SCREEN]: UpcomingListScreen,
  [Screens.NOTIFICATIONS_SCREEN]: NotificationListScreen,
  [Screens.PROFILE_SCREEN]: ProfileScreen,
}, {
});

const App = createSwitchNavigator({
  [Screens.SPLASH_STACK]: SplashScreen,
  [Screens.AUTHENTICATION_STACK]: AuthenStack,
  [Screens.APP_STACK]: AppStack,
});

const AppContainer = createAppContainer(App);

export default class extends React.Component {
  static router = AppContainer.router;

  render() {
    const { t } = this.props;
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        screenProps={{ t }}
        {...this.props}
      />
    );
  }
}
