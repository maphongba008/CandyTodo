import { types } from 'mobx-state-tree';


const Setting = types.model('Setting', {
  emailNotification: false,
  vibrateOnAlert: false,
  shareProfile: false,
  showTaskCompletionStatus: false,
}).actions(self => ({
  setEmailNotification(s) { self.emailNotification = s; },
  setVibrateOnAlert(s) { self.vibrateOnAlert = s; },
  setShareProfile(s) { self.shareProfile = s; },
  setShowTaskCompletionStatus(s) { self.showTaskCompletionStatus = s; },
}));

export default Setting;
