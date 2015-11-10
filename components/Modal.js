import React from 'react';

export default class Modal extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    document.addEventListener('keydown', ::this.handleKeydown);
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

  componentWillUnmount () {
    document.body.style.overflowY = 'auto';
    document.removeEventListener('keydown', ::this.handleKeydown);
  }

  handleKeydown (e) {
    e.preventDefault();
    if (e.which === 27) {
      this.props.onClose();
    }
  }

  handleClose (e) {
    e.stopPropagation();
    this.props.onClose();
  }

  handleClick (e) {
    e.stopPropagation();
    if (e.target.parentNode.parentNode === React.findDOMNode(this.refs.modal)) {
      this.props.onClose();
    }
  }

  render () {
    return (
      <div className='Modal-overlay' onClick={::this.handleClick} ref='overlay'>
        <i className='icon-cross' onClick={::this.handleClose} ref='close' />
        <div className='Modal' ref='modal'>
          {this.props.component}
        </div>
      </div>
    );
  }

}
