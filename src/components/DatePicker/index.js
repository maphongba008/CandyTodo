import React from 'react';
import { View, Platform, DatePickerAndroid } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import moment from 'moment';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';
import DatePickerModal from './DatePickerModal';

const isAndroid = Platform.OS === 'android';

type Props = {
  title?: string;
  style?: any;
  placeholder?: any;
  value?: Date;
  onDateChange?: (date: Date) => void;
};

export default class extends React.Component<Props> {

  state = {
    showModal: false,
  }

  _onPressSelectDate = async () => {
    if (isAndroid) {
      try {
        const {
          action, year, month, day,
        } = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          date: this.props.value || new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // Selected year, month (0-11), day
          const date = new Date(year, month, day);
          const { onDateChange } = this.props;
          onDateChange && onDateChange(date);
        }
      } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
      }
    } else {
      this.setState({ showModal: true });
    }
  }

  _onConfirmDate = (date) => {
    this.setState({ showModal: false });
    const { onDateChange } = this.props;
    onDateChange && onDateChange(date);
  }

  render() {
    const {
      title, style, placeholder, value,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text f12 fontBook darkSlateBlue style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={[styles.view]}
          onPress={this._onPressSelectDate}
        >
          <Text f12 darkSlateBlue o5={!value}>{value ? moment(value).format('DD/MM/YYYY') : placeholder}</Text>
        </TouchableOpacity>
        <DatePickerModal
          visible={this.state.showModal}
          date={value}
          onConfirm={this._onConfirmDate}
        />
      </View>
    );
  }

}


const styles = ScaledSheet.create({
  container: {

  },
  title: {

  },
  view: {
    marginTop: 8,
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(36, 59, 107, 0.5)',
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
