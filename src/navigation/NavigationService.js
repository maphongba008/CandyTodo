import { NavigationActions } from 'react-navigation';

let _navigator = null;

function setTopLevelNavigator(navigator) {
  _navigator = navigator;
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

function navigate(routeName, params) {
  //
  console.log("-- NAVIGATION TO -- ", routeName);
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  setTopLevelNavigator,
  back,
  navigate,
}