import React from 'react';

export default class FunnyLink extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <span className='FunnyLink' onClick={this.props.onClick}>
        <span className='line'></span>
        <span className='children'>{this.props.children}</span>
      </span>
    );
  }

}
