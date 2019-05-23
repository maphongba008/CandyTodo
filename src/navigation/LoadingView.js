import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import AppStore from '@src/features/stores/AppStore';
import { ScaledSheet } from 'rn-scaled-sheet';


class LoadingView extends React.Component {

  render() {
    if (!AppStore.isShowLoading) {
      return null;
    }
    return (
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator color='rgba(0, 0, 0, .5)' />
        </View>
      </View>
    );
  }

}

const styles = ScaledSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  container: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
});

export default observer(LoadingView);
