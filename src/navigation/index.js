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
import UpdateProfileScreen from '@src/features/app/updateProfile';
import CreateTaskScreen from '@src/features/app/createTask';
import Emitter from '@src/utils/Emitter';
import Screens from './Screens';
import NavigationService from './NavigationService';
import Tabbar from './Tabbar';
import Drawer from './Drawer';
import LoadingView from './LoadingView';
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


const AppContainer = createAppContainer(createStackNavigator({
  App,
  // modals goes here
  [Screens.UPDATE_PROFILE_SCREEN]: UpdateProfileScreen,
  [Screens.CREATE_TASK]: CreateTaskScreen,
}, {
  headerMode: 'none',
  mode: 'modal',
}));

export default class extends React.Component {

  static router = AppContainer.router;

  state = {
    drawerEnabled: false,
  }

  _onNavigationStateChange = (_, nextState: NavigationState) => {
    const currentStack = nextState.routes[0].routes[nextState.routes[0].index];
    const drawerEnabled = nextState.index === 0 && currentStack.key === Screens.APP_STACK;
    this.setState({ drawerEnabled });
  }

  componentDidMount = () => {
    Emitter.register(Emitter.Keys.OpenDrawer, this._openDrawer);
    Emitter.register(Emitter.Keys.CloseDrawer, this._closeDrawer);
  };

  _openDrawer = () => this._drawer.openDrawer();

  _closeDrawer = () => this._drawer.closeDrawer();

  render() {
    return (
      <DrawerLayout
        drawerWidth={200}
        drawerPosition='left'
        drawerType='slide'
        edgeWidth={60}
        ref={r => this._drawer = r}
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
        <LoadingView />
      </DrawerLayout>
    );
  }
}
