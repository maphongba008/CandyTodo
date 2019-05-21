import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import Text from '../Text';

type Props = {
  title?: string;
}

export default class extends React.PureComponent<Props> {

  render() {
    const { title } = this.props;
    return (
      <View style={[styles.container]}>
        {!!title && <Text fontBlack f24 darkSlateBlue style={styles.title}>{title}</Text>}
        {
          this.props.children
        }
      </View>
    );
  }

}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#ffeeee',
    height: 112,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: Sizes.Margin,
  },
});
