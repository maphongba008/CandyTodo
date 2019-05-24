import React from 'react';
import {
  View, TextInput, Switch,
  Dimensions, ScrollView
} from 'react-native';
import {
  Container, Header, TopView,
  DatePicker, Dropdown, Text,
  TouchableOpacity, Icon
} from '@src/components';
import { ScaledSheet, scaleSmart } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import Colors from '@src/constants/Colors';
import Fonts from '@src/constants/Fonts';
import AppStore from '@src/features/stores/AppStore';
import NavigationService from '@src/navigation/NavigationService';

const { width } = Dimensions.get('window');

const left = (width - scaleSmart(56)) / 2;

const Priorities = {
  LOW: {
    key: 'LOW',
    value: 'Low',
  },
  MEDIUM: {
    key: 'MEDIUM',
    value: 'Medium',
  },
  HIGH: {
    key: 'HIGH',
    value: 'High',
  },
};

class Row extends React.Component {

  render() {
    const { text, value, onValueChange } = this.props;
    return (
      <View style={rowStyles.container}>
        <Text darkSlateBlue f12 fontBook style={[rowStyles.text]}>{text}</Text>
        <Switch value={value} onValueChange={onValueChange} />
      </View>
    );
  }

}

const rowStyles = ScaledSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginRight: 8,
  },
});


export default class extends React.Component {

  state = {
    task: '',
    completeBy: null,
    priority: null,
    alarm: false,
    notification: false,
  }

  _isSaveEnabled = () => {
    const {
      task, completeBy, priority, alarm, notification,
    } = this.state;
    if (!task || !completeBy || !priority) {
      return false;
    }
    return true;
  }

  _onPressSave = () => {
    const {
      task, completeBy, priority, alarm, notification,
    } = this.state;
    AppStore.createTask(task, completeBy.getTime(), priority.key, alarm, notification);
    NavigationService.back();
  }

  render() {
    return (
      <Container>
        <Header
          title='NEW TASK'
          backEnabled
        />
        <TopView>
          <TextInput
            underlineColorAndroid='transparent'
            autoCorrect={false}
            autoFocus
            style={styles.input}
            value={this.state.task}
            onChangeText={task => this.setState({ task })}
            placeholderTextColor='rgba(36, 59, 107, 0.5)'
            placeholder='Write here...'
          />
        </TopView>
        <ScrollView style={styles.containerView} contentContainerStyle={styles.containterContent}>
          <DatePicker
            title='Complete by'
            placeholder='Select a date'
            style={styles.datePicker}
            value={this.state.completeBy}
            onDateChange={completeBy => this.setState({ completeBy })}
          />
          <Dropdown
            title='Priority'
            style={styles.priority}
            options={[Priorities.LOW, Priorities.MEDIUM, Priorities.HIGH]}
            selectedOption={this.state.priority}
            onOptionSelected={priority => this.setState({ priority })}
          />
          <Text f12 darkSlateBlue o5 style={styles.title}>More Options</Text>
          <Row
            text='Save as alarm'
            value={this.state.alarm}
            onValueChange={alarm => this.setState({ alarm })}
          />
          <Row
            text='Show as notification'
            value={this.state.notification}
            onValueChange={notification => this.setState({ notification })}
          />
        </ScrollView>
        <TouchableOpacity disabled={!this._isSaveEnabled()} onPress={this._onPressSave} style={styles.doneButton}>
          <Icon name='ios-checkmark' white f25 />
        </TouchableOpacity>
      </Container>
    );
  }

}


const styles = ScaledSheet.create({
  input: {
    marginHorizontal: Sizes.Margin,
    fontSize: 24,
    color: Colors.darkSlateBlue,
    fontFamily: Fonts.BLACK,
    flex: 1,
  },
  containerView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containterContent: {
    paddingHorizontal: Sizes.Margin,
  },
  datePicker: {
    marginTop: 16,
  },
  priority: {
    marginTop: 16,
  },
  title: {
    marginTop: 32,
  },
  doneButton: {
    position: 'absolute',
    left: `${left}`,
    bottom: 16,
    width: 56,
    height: 56,
    backgroundColor: Colors.darkSlateBlue,
    borderRadius: 27.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
