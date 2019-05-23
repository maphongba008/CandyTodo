export default class {

  static login = (email, password) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email,
        firstName: 'Tiffany',
        lastName: 'Schneider',
        avatar: 'https://9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-1.jpg',
        setting: {
          emailNotification: true,
          vibrateOnAlert: false,
          shareProfile: false,
          showTaskCompletionStatus: true,
        },
      });
    }, 1000);
  })

  static register = (email, password) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email,
        firstName: 'Tiffany',
        lastName: 'Schneider',
        avatar: 'https://9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-1.jpg',
        setting: {
          emailNotification: true,
          vibrateOnAlert: false,
          shareProfile: false,
          showTaskCompletionStatus: true,
        },
      });
    }, 1000);
  })

  static logout = () => new Promise((resolve) => {
    resolve();
  })

}
