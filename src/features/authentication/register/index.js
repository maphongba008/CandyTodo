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
import ParsedText from 'react-native-parsed-text';
import Screens from '@src/navigation/Screens';
import AppStore from '@src/features/stores/AppStore';

export default class extends React.Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  _onPressLogin = () => {
    NavigationService.back();
  }

  _onPolicyPress = () => {

  }

  _isRegisterEnable = () => {
    const { email, password, confirmPassword } = this.state;
    return !!email && !!password && !!confirmPassword && password === confirmPassword;
  }

  _onPressRegister = async () => {
    const { email, password } = this.state;
    AppStore.showLoading();
    const error = await AppStore.register(email, password);
    AppStore.hideLoading();
    if (!error) {
      NavigationService.navigate(Screens.APP_STACK);
    } else {
      alert(error.message);
    }
  }

  _renderText = text => text.slice(1, text.length - 1)

  render() {
    return (
      <Container>
        <Header
          title='REGISTER'
        />
        <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
          <Input
            title='Email'
            style={styles.emailInput}
            inputProps={{
              keyboardType: 'email-address',
              value: this.state.email,
              onChangeText: email => this.setState({ email }),
            }}
          />
          <Input
            title='Password'
            style={styles.passwordInput}
            inputProps={{
              secureTextEntry: true,
              value: this.state.password,
              onChangeText: password => this.setState({ password }),
            }}
          />
          <Input
            title='Confirm Password'
            style={styles.confirmPasswordInput}
            inputProps={{
              secureTextEntry: true,
              value: this.state.confirmPassword,
              onChangeText: confirmPassword => this.setState({ confirmPassword }),
            }}
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={this._onPressRegister}
            disabled={!this._isRegisterEnable()}
          >
            <Text white f14 fontHeavy style={styles.registerText}>Register</Text>
          </TouchableOpacity>
          <ParsedText
            style={styles.policyText}
            parse={
              [
                {
                  pattern: /\[.*?\]/i,
                  style: [styles.underlineText],
                  renderText: this._renderText,
                  onPress: this._onPolicyPress,
                }
              ]
            }

          >
            {'By registering, you automatically accept \n the [Terms & Policies] of \n candy app.'}
          </ParsedText>
          <TouchableOpacity
            onPress={this._onPressLogin}
            style={styles.loginButton}
          >
            <Text darkSlateBlue fontHeavy f14 style={styles.loginText}>Have account? Log In</Text>
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
  confirmPasswordInput: {
    marginTop: 16,
  },
  registerButton: {
    height: 50,
    backgroundColor: Colors.darkSlateBlue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  registerText: {

  },
  policyText: {
    marginTop: 32,
    color: Colors.darkSlateBlue,
    fontSize: 12,
    textAlign: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  loginButton: {
    marginTop: 40,
    alignSelf: 'center',
  },
  loginText: {
    textDecorationLine: 'underline',
  },
});
