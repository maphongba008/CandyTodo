import React from 'react';
import { Container, Header } from '@src/components';


class TaskListScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header
          title='TO-DO'
          leftIcon='ios-menu'
          rightIcon='ios-search'
        />
      </Container>
    );
  }

}

export default TaskListScreen;
