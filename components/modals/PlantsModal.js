import React from 'react';

export default class PlantsModal extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='PlantsModal'>
        <div className='row row-end sm-wrap'>
          <div className='col-def'>
            <img src='images/plantes/1.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/plantes/2.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src='images/plantes/3.jpg' />
          </div>
          <div className='col'>
            <img src='images/plantes/4.jpg' />
          </div>
          <div className='col'>
            <img src='images/plantes/5.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/plantes/6.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/plantes/7.jpg' />
          </div>
        </div>
      </div>
    );
  }

}
