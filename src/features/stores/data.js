import moment from 'moment';

export const todos = [
  {
    id: '1',
    task: 'Read Type Guidelines',
    status: 'DONE',
    completeBy: moment().add('day', 1).toDate().getTime(),
  },
  {
    id: '12',
    task: 'Bring Groceries',
    status: 'TODO',
    completeBy: moment().add('day', 2).toDate().getTime(),
  },
  {
    id: '13',
    task: 'Talk to Pamela and Betty',
    status: 'TODO',
    completeBy: moment().toDate().getTime(),
  },
  {
    id: '14',
    task: 'Take Muffy for walk',
    status: 'DONE',
    completeBy: moment().toDate().getTime(),
  },
  {
    id: '15',
    task: 'Complete Responsive Design',
    status: 'DONE',
    completeBy: moment().add('day', 1).toDate().getTime(),
  }
];

export const a = 1;
