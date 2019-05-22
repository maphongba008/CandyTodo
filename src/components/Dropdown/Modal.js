import React from 'react';
import {
  View, StyleSheet, Modal, FlatList, TouchableOpacity, Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../Text';

export const ItemHeight = 40;

class Option extends React.Component {

  onRowPress = () => {
    const { item, onPress } = this.props;
    onPress && onPress(item);
  }

  render() {
    const { item, isSelected } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.onRowPress} style={optionStyle.container}>
        <Text style={optionStyle.text}>{item.value}</Text>
        {isSelected && (<Icon name='ios-checkmark' style={optionStyle.iconArrow} />)}
      </TouchableOpacity>
    );
  }

}

const optionStyle = StyleSheet.create({
  container: {
    height: ItemHeight,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  iconArrow: {
    fontSize: 25,
  },
});


export default class DropDownModal extends React.PureComponent {

  state = {
    animation: new Animated.Value(0),
  }

  keyExtractor = item => String(item.key)

  renderItem = ({ item }) => {
    const isSelected = this.props.selectedOption ? (this.props.selectedOption.key === item.key) : false;
    return <Option isSelected={isSelected} onPress={this.props.onPressOption} item={item} />;
  }

  componentDidMount = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
    }).start();
  };


  hide = () => new Promise((resolve) => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
    }).start(() => {
      resolve();
    });
  })

  render() {
    const {
      px, py, width, options, onClose,
      visible,
    } = this.props;
    const animatedStyle = { opacity: this.state.animation };
    return (
      <Modal
        onRequestClose={onClose}
        animationType='none'
        visible={visible}
        transparent
      >
        <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.container}>
          <Animated.View style={[styles.list, {
            left: px + 10,
            top: py,
            width,
            backgroundColor: '#ffffff',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 4,
            shadowOpacity: 1,
          }, animatedStyle]}
          >
            <FlatList
              data={options}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, .3)',
  },
  button: {
    height: ItemHeight,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
  },
  list: {
    position: 'absolute',
    maxHeight: ItemHeight * 5,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  },
  separator: {
    marginHorizontal: 10,
  },
});
