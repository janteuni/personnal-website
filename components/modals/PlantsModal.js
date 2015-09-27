import React from 'react';

export default class PlantsModal extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='PlantsModal'>
        <h1>
          My Cactus and Plants
        </h1>
        <div className='row'>
          <div className='col'>
            <img src='images/plantes/1.jpg' />
          </div>
          <div className='col'>
            <img src='images/plantes/2.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src='images/plantes/5.jpg' />
          </div>
          <div className='col'>
            <img src='images/plantes/6.jpg' />
          </div>
          <div className='col'>
            <img src='images/plantes/7.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src='images/plantes/8.jpg' />
          </div>
          <div className='col col-2'>
            <img src='images/plantes/9.jpg' />
          </div>
        </div>
      </div>
    );
  }

}
