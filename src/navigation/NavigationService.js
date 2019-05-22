import { NavigationActions } from 'react-navigation';
import Emitter from '@src/utils/Emitter';

let _navigator = null;

function setTopLevelNavigator(navigator) {
  _navigator = navigator;
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

function navigate(routeName, params) {
  //
  console.log('-- NAVIGATION TO -- ', routeName);
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}


function openDrawer() {
  Emitter.notify(Emitter.Keys.OpenDrawer);
}

function closeDrawer() {
  Emitter.notify(Emitter.Keys.CloseDrawer);
}

function navigateAndCloseDrawer(routeName, params) {
  navigate(routeName, params);
  closeDrawer();
}

export default {
  setTopLevelNavigator,
  back,
  navigate,
  openDrawer,
  closeDrawer,
  navigateAndCloseDrawer,
};
