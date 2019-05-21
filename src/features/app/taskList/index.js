import React from 'react';
import { Container, Header, TopView } from '@src/components';
import TaskList from '../components/TaskList';

const data = [
  {
    id: '1',
    task: 'Read Type Guidelines',
    isDone: false,
  },
  {
    id: '12',
    task: 'Bring Groceries',
    isDone: true,
  },
  {
    id: '13',
    task: 'Talk to Pamela and Betty',
    isDone: true,
  },
  {
    id: '14',
    task: 'Take Muffy for walk',
    isDone: false,
  },
  {
    id: '15',
    task: 'Complete Responsive Design',
    isDone: false,
  }
];

class TaskListScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header
          title='TO-DO'
          leftIcon='ios-menu'
          rightIcon='ios-search'
          shadow
        />
        <TopView
          title={'Today’s\nlist —'}
        />
        <TaskList
          data={data}
        />
      </Container>
    );
  }

}

export default TaskListScreen;
