import { types, flow } from 'mobx-state-tree';
import UserApi from '@src/api/UserApi';
import groupBy from 'lodash/groupBy';
import NavigationService from '@src/navigation/NavigationService';
import User from './User';
import Todo, { Status } from './Todo';
import { todos, notifications } from './data';
import Notification from './Notification';

const AppStore = types.model('AppStore', {
  user: types.maybeNull(User),
  todos: types.array(Todo),
  notifications: types.array(Notification),
  isShowLoading: false,
}).actions(self => ({
  register: flow(function* login(email, password) {
    try {
      const user = yield UserApi.register(email, password);
      self.user = user;
      return undefined;
    } catch (e) {
      return e;
    }
  }),
  login: flow(function* login(email, password) {
    try {
      const user = yield UserApi.login(email, password);
      self.user = user;
      return undefined;
    } catch (e) {
      return e;
    }
  }),
  logout: flow(function* logout() {
    try {
      yield UserApi.logout();
      self.user = undefined;
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
  get sectionNotifications() {
    const res = groupBy(self.notifications, t => t.dateString);
    return Object.keys(res).map(key => ({
      title: key,
      data: res[key],
    }));
  },
}))
  .actions(self => ({
    createTask(task, completeBy, priority, saveAsAlarm, saveAsNotification) {
      const newTask = {
        task,
        completeBy,
        priority,
        status: Status.TODO,
        id: `${new Date().getTime()}`, // TODO: generate uuid
      };

      if (saveAsAlarm) {
        // TODO: save to alarm
      }
      if (saveAsNotification) {
        // TODO: save to notification
      }
      self.todos.push(newTask);
    },
  }))
  .create({
    user: undefined,
    isShowLoading: false,
    todos,
    notifications,
  });

export default AppStore;
