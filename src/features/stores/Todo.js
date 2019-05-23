import { types } from 'mobx-state-tree';
import moment from 'moment';

const Status = {
  TODO: 'TODO',
  DONE: 'DONE',
};

const Todo = types.model('Todo', {
  id: types.string,
  task: types.string,
  status: types.string,
  completeBy: types.number,
}).views(self => ({
  get isDone() {
    return self.status === Status.DONE;
  },
  get isTodayTask() {
    return moment(self.completeBy).isSame(moment(), 'day');
  },
  get dateString() {
    return moment(self.completeBy).fromNow();
  },
})).actions(self => ({
  toggle() {
    if (self.isDone) {
      self.status = Status.TODO;
    } else {
      self.status = Status.DONE;
    }
  },
}));

export default Todo;
