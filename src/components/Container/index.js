import React from 'react';
import { View, Dimensions, Platform } from 'react-native';

const ios = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');

const isIphoneX = ios && ((height === 812 || width === 812) || (height === 896 || width === 896));
const STATUS_BAR_HEIGHT = ios ? (isIphoneX ? 34 : 20) : 0;

type Props = {
  style?: any;
  statusBarStyle?: any;
  bottomBarStyle?: any;
  colors?: Array<string>;
  noStatusBar?: boolean;
}

export default class extends React.Component<Props> {

  render() {
    const {
      statusBarStyle, style,
      children, noStatusBar,
    } = this.props;
    return (
      <View {...this.props} style={[{ flex: 1, backgroundColor: '#ffeeee' }]}>
        {!!STATUS_BAR_HEIGHT && !noStatusBar && <View style={[{ height: STATUS_BAR_HEIGHT }, statusBarStyle]} />}
        <View style={[{ flex: 1 }, style]}>
          {children}
        </View>
      </View>
    );
  }

}
