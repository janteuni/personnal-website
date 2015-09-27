import React from 'react';

export default class Modal extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    document.body.style.overflowY = 'hidden';
    const overlay = React.findDOMNode(this.refs.overlay);
    const close = React.findDOMNode(this.refs.close);
    const modal = React.findDOMNode(this.refs.modal);
    new TimelineMax()
      .set([overlay, close, modal], { opacity: 0 })
      .set(modal, { y: 20 })
      .set(close, { x: 20 })
      .to(overlay, 0.2, { opacity: 1 })
      .to(modal, 0.25, { opacity: 1, y: 0 })
      .to(close, 0.25, { opacity: 1, x: 0 });
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
      <div className='Modal-overlay' onClick={::this.handleClose} ref='overlay'>
        <i className='ion-close' onClick={::this.handleClose} ref='close' />
        <div className='Modal' onClick={::this.stopPropagation} ref='modal'>
          {this.props.component}
        </div>
      </div>
    );
  }

}
