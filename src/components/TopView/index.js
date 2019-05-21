import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import Text from '../Text';

type Props = {
  title?: string;
}

export default class extends React.PureComponent<Props> {

  render() {
    const { title } = this.props;
    return (
      <View style={[styles.container]}>
        <Text fontBlack f24 darkSlateBlue style={styles.title}>{title}</Text>
      </View>
    );
  }

}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#ffeeee',
  },
  title: {
    marginVertical: 32,
    marginLeft: 32,
  },
});
