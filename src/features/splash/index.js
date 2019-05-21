import React from 'react';
import { Image } from 'react-native';
import AppLogo from '@src/assets/icons/ic_app_logo.png';
import { Container, Text } from '@src/components';
import { ScaledSheet } from 'rn-scaled-sheet';
import NavigationService from '@src/navigation/NavigationService';
import Screens from '@src/navigation/Screens';

export default class extends React.Component {

  componentDidMount = () => {
    setTimeout(() => {
      NavigationService.navigate(Screens.AUTHENTICATION_STACK);
    }, 200);
  };


  render() {
    return (
      <Container style={styles.container}>
        <Image source={AppLogo} />
        <Text darkSlateBlue fontBlack style={styles.appName}>Candy</Text>
        <Text f12 darkSlateBlue fontBook style={styles.appDescription}>Simple Task Manager</Text>
      </Container>
    );
  }

}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 36,
  },
  appDescription: {
    marginTop: 40,
  },
});
