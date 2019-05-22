import React from 'react';
import { View, DatePickerIOS, Modal } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import Colors from '@src/constants/Colors';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';


export default class extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      date: props.date || new Date(),
    };
  }

  _onConfirm = () => {
    const { onConfirm } = this.props;
    onConfirm && onConfirm(this.state.date);
  }

  render() {
    const { visible } = this.props;
    return (
      <Modal
        visible={visible}
        onRequestClose={this._onConfirm}
        transparent
        animationType='fade'
      >
        <View style={styles.overlay}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={this._onConfirm}
            style={styles.overlayButton}
          />
          <View style={styles.pickerView}>
            <TouchableOpacity onPress={this._onConfirm} style={styles.closeButton}>
              <Text darkSlateBlue f14 fontBlack>Done</Text>
            </TouchableOpacity>
            <DatePickerIOS
              style={styles.picker}
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              minimumDate={new Date()}
              mode='date'
            />
          </View>
        </View>
      </Modal>
    );
  }

}


const styles = ScaledSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  overlayButton: {
    flex: 1,
  },
  pickerView: {
    height: 200,
    backgroundColor: Colors.pink,
  },
  picker: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginRight: 8,
  },
});
