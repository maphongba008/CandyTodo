import { types, flow } from 'mobx-state-tree';
import UserApi from '@src/api/UserApi';
import User from './User';

const AppStore = types.model('AppStore', {
  user: types.maybeNull(User),
  isShowLoading: false,
}).actions(self => ({
  login: flow(function* login(email, password) {
    try {
      const user = yield UserApi.login(email, password);
      self.user = user;
      return undefined;
    } catch (e) {
      return e;
    }
  }),
})).actions(self => ({
  showLoading() {
    self.isShowLoading = true;
  },
  hideLoading() {
    self.isShowLoading = false;
  },
})).create({
  user: undefined,
  isShowLoading: false,
});

export default AppStore;
