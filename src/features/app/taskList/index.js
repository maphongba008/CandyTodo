import React from 'react';
import { Container, Header, TopView } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import AppStore from '@src/features/stores/AppStore';
import TaskList from './components/TaskList';

class TaskListScreen extends React.Component {

  _onPressTodo = (todo) => {
    todo.toggle();
  }

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
          onPressItem={this._onPressTodo}
          data={AppStore.todayTasks}
          style={styles.list}
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
