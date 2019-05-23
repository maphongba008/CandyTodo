import { types } from 'mobx-state-tree';
import moment from 'moment';

const Notification = types.model('Notification', {
  id: types.string,
  text: types.string,
  linkAndroid: types.maybeNull(types.string),
  linkIOS: types.maybeNull(types.string),
  createdAt: types.number,
}).views(self => ({
  get dateString() {
    return moment(self.createdAt).fromNow();
  },
}));

export default Notification;
