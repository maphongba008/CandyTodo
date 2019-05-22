import { types } from 'mobx-state-tree';


const User = types.model('User', {
  email: types.string,
  firstName: types.string,
  lastName: types.string,
  avatar: types.string,
}).views(self => ({
  get fullName() {
    return `${self.firstName} ${self.lastName}`;
  },
}));


export default User;
