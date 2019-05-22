import React from 'react';
import { View, Platform, Dimensions } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import moment from 'moment';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';
import Icon from '../Icon';
import DropDownModal from './Modal';

type Props = {
  title?: string;
  style?: any;
  options?: Array<any>;
  onOptionSelected?: (option) => void;
  selectedOption?: any;
};

const screenHeight = Dimensions.get('window').height;

export default class extends React.Component<Props> {

  state = {
    showModal: false,
    px: 0,
    py: 0,
    width: 0,
  }

  _onPress = () => {
    const optionsHeight = 50 * Math.min(this.props.options.length, 5);
    this.view.measure((fx, fy, width, height, px, py) => {
      let y = py + height - 10;
      if (y + optionsHeight > screenHeight - 100) {
        y = py - optionsHeight + 10;
      }
      this.setState({
        px, py: y, width, showModal: true,
      });
    });
  }

  onPressOption = (option) => {
    this.setState({ showModal: false });
    const { onOptionSelected } = this.props;
    onOptionSelected && onOptionSelected(option);
  }

  render() {
    const {
      title, style,
      selectedOption, options,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text f12 fontBook darkSlateBlue style={styles.title}>{title}</Text>
        <View ref={r => this.view = r}>
          <TouchableOpacity
            style={[styles.view]}
            onPress={this._onPress}
          >
            <Text f12 darkSlateBlue style={styles.text}>{selectedOption ? selectedOption.value : ''}</Text>
            <Icon white darkSlateBlue name='ios-arrow-down' />
          </TouchableOpacity>
        </View>
        <DropDownModal
          visible={this.state.showModal}
          selectedOption={selectedOption}
          options={options}
          width={this.state.width}
          px={this.state.px}
          py={this.state.py}
          onClose={() => this.setState({ showModal: false })}
          onPressOption={this.onPressOption}
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(36, 59, 107, 0.5)',
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
  },
  text: {
    flex: 1,
    marginRight: 8,
  },
});
