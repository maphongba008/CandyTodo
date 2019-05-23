import React from 'react';
import { Container, Header, TopView } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import NavigationService from '@src/navigation/NavigationService';
import AppStore from '@src/features/stores/AppStore';
import TaskList from './components/NotificationList';

const data = [
  {
    title: 'Tomorrow',
    data: [{
      id: '1',
      text: 'Read Type Guidelines',
    },
    {
      id: '12',
      text: 'Bring Groceries',
    }],
  },
  {
    title: '12/1/2019',
    data: [{
      id: '13',
      text: 'Talk to Pamela and Betty',
    },
    {
      id: '14',
      text: 'Take Muffy for walk',
    },
    {
      id: '15',
      text: 'Complete Responsive Design',
    }],
  }
];

class NotificationsScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header
          title='NOTIFICATIONS'
          leftIcon='ios-menu'
          onPressLeft={NavigationService.openDrawer}
          rightIcon='ios-search'
          shadow
        />
        <TopView
          title={'Alerts &\nUpdates —'}
        />
        <TaskList
          data={AppStore.sectionNotifications}
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

export default NotificationsScreen;
