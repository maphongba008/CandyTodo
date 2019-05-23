import { types } from 'mobx-state-tree';
import Setting from './Setting';


const User = types.model('User', {
  email: types.string,
  firstName: types.string,
  lastName: types.string,
  avatar: types.string,
  setting: types.maybeNull(Setting),
}).views(self => ({
  get fullName() {
    return `${self.firstName} ${self.lastName}`;
  },
})).actions(self => ({
  update(name, email) {
    self.firstName = name;
    self.email = email;
  },
}));


export default User;
