export default class {

  static login = (email, password) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: 'tiffany.s@email.com',
        firstName: 'Tiffany',
        lastName: 'Schneider',
        avatar: 'https://9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-1.jpg',
      });
    }, 1000);
  })

}
