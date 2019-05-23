import React from 'react';
import { Container, Header, TopView } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import AppStore from '@src/features/stores/AppStore';
import TaskList from './components/UpcomingList';

const data = [
  {
    title: 'Tomorrow',
    data: [{
      id: '1',
      task: 'Read Type Guidelines',
      isDone: false,
    },
    {
      id: '12',
      task: 'Bring Groceries',
      isDone: true,
    }],
  },
  {
    title: '12/1/2019',
    data: [{
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
    }],
  }
];

class TaskListScreen extends React.Component {

  _onPressTodo = (todo) => {
    todo.toggle();
  }

  render() {
    return (
      <Container>
        <Header
          title='SCHEDULER'
          leftIcon='ios-menu'
          rightIcon='ios-search'
          shadow
        />
        <TopView
          title={'Upcoming\ntasks —'}
        />
        <TaskList
          data={AppStore.sectionUpcomingTasks}
          style={styles.list}
          onPressItem={this._onPressTodo}
        />
      </Container>
    );
  }

}

const styles = ScaledSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default TaskListScreen;
