import React from 'react';

export default class ExternalLink extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <a className='ExternalLink' href={this.props.link} target='_blank'>
        <span className='line'></span>
        <span className='children'>{this.props.children}</span>
      </a>
    );
  }

}
