import React from 'react';
import { TextInput, View, Dimensions } from 'react-native';
import {
  Container, Header, TopView, Input,
  TouchableOpacity, Icon
} from '@src/components';
import AppStore from '@src/features/stores/AppStore';
import { ScaledSheet, scaleSmart } from 'rn-scaled-sheet';
import Sizes from '@src/constants/Sizes';
import Colors from '@src/constants/Colors';
import Fonts from '@src/constants/Fonts';
import NavigationService from '@src/navigation/NavigationService';

const { width } = Dimensions.get('window');

const left = (width - scaleSmart(56)) / 2;


export default class extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: AppStore.user.email,
    };
  }

  _isSaveEnabled = () => {
    const { name, email } = this.state;
    return !!name && !!email;
  }

  _onPressSave = () => {
    const { name, email } = this.state;
    AppStore.user.update(name, email);
    NavigationService.back();
  }

  render() {
    return (
      <Container>
        <Header
          title='EDIT PROFILE'
          backEnabled
        />
        <TopView>
          <TextInput
            underlineColorAndroid='transparent'
            autoCorrect={false}
            autoFocus
            style={styles.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholderTextColor='rgba(36, 59, 107, 0.5)'
            placeholder='Your name...'
          />
        </TopView>
        <View style={styles.containerView}>
          <Input
            style={styles.emailInput}
            title='Email'
            inputProps={{
              value: this.state.email,
              onChangeText: email => this.setState({ email }),
            }}
          />
          <TouchableOpacity
            disabled={!this._isSaveEnabled()}
            style={styles.doneButton}
            onPress={this._onPressSave}
          >
            <Icon name='ios-checkmark' white f25 />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

}

const styles = ScaledSheet.create({
  input: {
    marginHorizontal: Sizes.Margin,
    fontSize: 24,
    color: Colors.darkSlateBlue,
    fontFamily: Fonts.BLACK,
    flex: 1,
  },
  containerView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  emailInput: {
    marginTop: 16,
    marginHorizontal: Sizes.Margin,
  },
  doneButton: {
    position: 'absolute',
    left: `${left}`,
    bottom: 16,
    width: 56,
    height: 56,
    backgroundColor: Colors.darkSlateBlue,
    borderRadius: 27.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
