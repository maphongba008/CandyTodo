import React from 'react';
import {
  Container, Header, Input,
  TouchableOpacity, Text
} from '@src/components';
import { View } from 'react-native';
import { ScaledSheet } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import Colors from '@src/constants/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '@src/navigation/NavigationService';
import Screens from '@src/navigation/Screens';
import AppStore from '@src/features/stores/AppStore';

export default class extends React.Component {

  state = {
    email: '',
    password: '',
  }

  _onPressLogin = async () => {
    const { email, password } = this.state;
    AppStore.showLoading();
    const error = await AppStore.login(email, password);
    AppStore.hideLoading();
    if (error) {
      alert(error.message);
      return;
    }
    NavigationService.navigate(Screens.APP_STACK);
  }

  _onPressRegister = () => {
    NavigationService.navigate(Screens.REGISTER_SCREEN);
  }

  render() {
    return (
      <Container>
        <Header
          title='LOGIN'
        />
        <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
          <Input
            title='Email'
            style={styles.emailInput}
            inputProps={{
              keyboardType: 'email-address',
            }}
          />
          <Input
            title='Password'
            style={styles.passwordInput}
            rightText='Forgot?'
            onRightButtonPress={() => alert('TODO')}
            inputProps={{
              secureTextEntry: true,
            }}
          />
          <TouchableOpacity onPress={this._onPressLogin} style={styles.loginButton}>
            <Text white f14 fontHeavy style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={this._onPressRegister}>
            <Text darkSlateBlue fontHeavy f14 style={styles.registerText}>New User? Register Here</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Container>
    );
  }

}


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Sizes.Margin,
  },
  emailInput: {

  },
  passwordInput: {
    marginTop: 16,
  },
  loginButton: {
    height: 50,
    backgroundColor: Colors.darkSlateBlue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  loginText: {

  },
  registerButton: {
    alignSelf: 'center',
  },
  registerText: {
    textDecorationLine: 'underline',
  },
});
