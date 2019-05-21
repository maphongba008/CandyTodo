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
  hide?: boolean;
}

export default class extends React.PureComponent<Props> {

  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(props.hide ? 1 : 0),
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.hide !== nextProps.hide) {
      Animated.timing(this.state.animation, {
        toValue: nextProps.hide ? 1 : 0,
        duration: 250,
        easing: Easing.quad,
      }).start();
    }
  };

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
    } = this.props;
    const Tag = leftIcon || backEnabled ? TouchableOpacity : View;

    const animatedStyle = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -100],
          }),
        }
      ],
    };

    return (
      <Animated.View style={[styles.containerSmall, style, animatedStyle]}>
        <Tag onPress={this._onPressLeft} style={styles.leftView}>
          {(!!leftIcon || backEnabled) && <Icon darkSlateBlue style={styles.leftIcon} f25 name={backEnabled ? 'arrow-back' : leftIcon} />}
        </Tag>
        <Text f15 fontBlack darkSlateBlue style={[styles.title, styles.titleSmall]}>{title}</Text>
        <TouchableOpacity style={styles.rightView} onPress={onPressRight} disabled={!rightIcon}>
          {!!rightIcon && <Icon f25 darkSlateBlue style={[styles.icon, rightIconStyle]} name={rightIcon} />}
        </TouchableOpacity>
      </Animated.View>
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
    fontSize: 25,
    color: '#FFF',
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
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 0.5,
    elevation: 1,
  },
  leftIcon: {
    marginLeft: 15,
  },
});
