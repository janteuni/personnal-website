import React from 'react';

export default class Modal extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    document.body.style.overflowY = 'hidden';
  }

  componentDidUnmount () {
    document.body.style.overflowY = 'auto';
  }

  handleClose (e) {
    e.stopPropagation();
    this.props.onClose();
  }

  stopPropagation (e) {
    e.stopPropagation();
  }

  render () {
    return (
      <div className='Modal-overlay' onClick={::this.handleClose}>
        <i className='ion-close' onClick={::this.handleClose} />
        <div className='Modal' onClick={::this.stopPropagation}>
          {this.props.component}
        </div>
      </div>
    );
  }

}
