import React from 'react';
import { View, Animated, Easing } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
// import { IconBack } from '@src/icons';
import NavigationService from '@src/navigation/NavigationService';
import Text from '../Text';
import Icon from '../Icon';
import TouchableOpacity from '../TouchableOpacity';

type Props = {
  style?: any;
  title?: string;
  leftIcon?: any;
  rightText?: string;
  rightIcon?: any;
  rightIconStyle?: any;
  onPressRight?: () => void;
  onPressLeft?: () => void;
  backEnabled?: boolean;
  shadow?: boolean;
}

export default class extends React.PureComponent<Props> {

  _onPressLeft = () => {
    const { backEnabled, onPressLeft } = this.props;
    if (onPressLeft) {
      return onPressLeft && onPressLeft();
    }
    if (backEnabled) {
      return NavigationService.back();
    }
    return null;
  }

  render() {
    const {
      style, title, rightText,
      rightIcon, onPressRight,
      leftIcon,
      backEnabled,
      rightIconStyle,
      shadow,
    } = this.props;
    const Tag = leftIcon || backEnabled ? TouchableOpacity : View;

    const shadowStyle = shadow ? styles.shadow : undefined;

    return (
      <View style={[styles.containerSmall, style, shadowStyle]}>
        <Tag onPress={this._onPressLeft} style={styles.leftView}>
          {(!!leftIcon || backEnabled) && <Icon darkSlateBlue style={styles.leftIcon} f25 name={backEnabled ? 'arrow-back' : leftIcon} />}
        </Tag>
        <Text f15 fontBlack darkSlateBlue style={[styles.title, styles.titleSmall]}>{title}</Text>
        <TouchableOpacity style={styles.rightView} onPress={onPressRight} disabled={!rightIcon}>
          {!!rightIcon && <Icon f25 darkSlateBlue style={[styles.icon, rightIconStyle]} name={rightIcon} />}
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  separator: {
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
  },
  buttonRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 15,
  },
  // small
  containerSmall: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftView: {
    width: 60,
    paddingLeft: 8,
  },
  rightView: {
    width: 60,
    paddingRight: 8,
    alignItems: 'flex-end',
  },
  titleSmall: {
    textAlign: 'center',
  },
  shadow: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowRadius: 7,
    // shadowOpacity: 1,
    elevation: 1,
  },
  leftIcon: {
    marginLeft: 15,
  },
});
