import React from 'react';
import { Image } from 'react-native';
import Checked from '@src/assets/icons/ic_checkbox_checked.png';
import Unchecked from '@src/assets/icons/ic_checkbox_unchecked.png';
import TouchableOpacity from '../TouchableOpacity';

type Props = {
  checked?: boolean;
  onCheckChanged?: (checked) => void;
  style?: any;
};

export default class extends React.PureComponent<Props> {

  _onCheckChanged = () => {
    const { checked, onCheckChanged } = this.props;
    onCheckChanged && onCheckChanged(!checked);
  }

  render() {
    return (
      <TouchableOpacity {...this.props} onPress={this._onCheckChanged}>
        <Image
          source={this.props.checked ? Checked : Unchecked}
        />
      </TouchableOpacity>
    );
  }

}
