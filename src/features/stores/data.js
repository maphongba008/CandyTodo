import moment from 'moment';
// fake data
export const todos = [
  {
    id: '1',
    task: 'Read Type Guidelines',
    status: 'DONE',
    completeBy: moment().add('day', 1).toDate().getTime(),
    priority: 'LOW',
  },
  {
    id: '12',
    task: 'Bring Groceries',
    status: 'TODO',
    completeBy: moment().add('day', 2).toDate().getTime(),
    priority: 'LOW',
  },
  {
    id: '13',
    task: 'Talk to Pamela and Betty',
    status: 'TODO',
    completeBy: moment().toDate().getTime(),
    priority: 'LOW',
  },
  {
    id: '14',
    task: 'Take Muffy for walk',
    status: 'DONE',
    completeBy: moment().toDate().getTime(),
    priority: 'LOW',
  },
  {
    id: '15',
    task: 'Complete Responsive Design',
    status: 'DONE',
    completeBy: moment().add('day', 1).toDate().getTime(),
    priority: 'LOW',
  }
];

export const notifications = [
  {
    id: '1',
    text: 'Hooray! You have completed all the tasks for today.',
    createdAt: new Date().getTime(),
  },
  {
    id: '2',
    text: 'A new update is available! [Update] now',
    createdAt: new Date().getTime(),
    linkAndroid: 'market://details?id=com.google.android.apps.maps',
    linkIOS: 'itms://itunes.apple.com/us/app/apple-store/myiosappid?mt=8',
  },
  {
    id: '3',
    text: 'Hooray! You have completed all the tasks for today.',
    createdAt: moment().add('day', -1).toDate().getTime(),
  },
  {
    id: '4',
    createdAt: moment().add('day', -1).toDate().getTime(),
    text: 'You missed one task yesterday',
  },
  {
    id: '5',
    createdAt: moment().add('day', -2).toDate().getTime(),
    text: 'You missed one task yesterday',
  }
];
