import { types, flow } from 'mobx-state-tree';
import UserApi from '@src/api/UserApi';
import groupBy from 'lodash/groupBy';
import User from './User';
import Todo from './Todo';
import { todos } from './data';

const AppStore = types.model('AppStore', {
  user: types.maybeNull(User),
  todos: types.array(Todo),
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
})).views(self => ({
  get todayTasks() {
    return self.todos.filter(t => t.isTodayTask);
  },
  get sectionUpcomingTasks() {
    const upcoming = self.todos.filter(t => !t.isTodayTask);
    const res = groupBy(upcoming, t => t.dateString);
    return Object.keys(res).map(key => ({
      title: key,
      data: res[key],
    }));
  },
}))
  .create({
    user: undefined,
    isShowLoading: false,
    todos,
  });

export default AppStore;
