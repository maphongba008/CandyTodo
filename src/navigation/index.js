import React from 'react';
import {
  createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator, NavigationState
} from 'react-navigation';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SplashScreen from '@src/features/splash';
import LoginScreen from '@src/features/authentication/login';
import RegisterScreen from '@src/features/authentication/register';
import TaskListScreen from '@src/features/app/taskList';
import UpcomingListScreen from '@src/features/app/upcomingList';
import NotificationListScreen from '@src/features/app/notifications';
import ProfileScreen from '@src/features/app/profile';
import Screens from './Screens';
import NavigationService from './NavigationService';
import Tabbar from './Tabbar';
import Drawer from './Drawer';
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
    tabBarComponent: props => <Tabbar {...props} />,
  });

const App = createSwitchNavigator({
  [Screens.SPLASH_STACK]: SplashScreen,
  [Screens.AUTHENTICATION_STACK]: AuthenStack,
  [Screens.APP_STACK]: AppStack,
});

const AppContainer = createAppContainer(App);

export default class extends React.Component {

  state = {
    drawerEnabled: false,
  }

  static router = AppContainer.router;

  _onNavigationStateChange = (prevState, nextState: NavigationState, action) => {
    console.log('prev', prevState);
    console.log('next', nextState);
    console.log('action', action);
    const currentStack = nextState.routes[nextState.index];
    const drawerEnabled = currentStack.key === Screens.APP_STACK;
    this.setState({ drawerEnabled });
  }

  render() {
    return (
      <DrawerLayout
        drawerWidth={200}
        drawerPosition='left'
        drawerType='slide'
        edgeWidth={60}
        minSwipeDistance={this.state.drawerEnabled ? 10 : 1000}
        drawerBackgroundColor='#ddd'
        renderNavigationView={() => <Drawer />}
      >

        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          onNavigationStateChange={this._onNavigationStateChange}
          {...this.props}
        />
      </DrawerLayout>
    );
  }
}
