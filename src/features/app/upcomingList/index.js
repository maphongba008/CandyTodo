import React from 'react';
import { Container, Header, TopView } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import AppStore from '@src/features/stores/AppStore';
import { observer } from 'mobx-react';
import NavigationService from '@src/navigation/NavigationService';
import TaskList from './components/UpcomingList';

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
          onPressLeft={NavigationService.openDrawer}
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

export default observer(TaskListScreen);
