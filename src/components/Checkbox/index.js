import React from 'react';
import Icon from '../Icon';


export default class extends React.PureComponent {

  render() {
    return (
      <Icon color='#93ffdf' f25 {...this.props} name={this.props.checked ? 'ios-checkbox' : 'ios-square-outline'} />
    );
  }

}
