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
            <img src='images/plantes/jasmine-anteunis-plants-1.jpg' alt='Jasmine Anteunis - collection of plants'/>
          </div>
          <div className='col-def'>
            <img src='images/plantes/jasmine-anteunis-cactus-2.jpg' alt='Jasmine Anteunis - Cactus and water'/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src='images/plantes/jasmine-anteunis-plants-3.jpg' alt='Jasmine Anteunis - First Ficus'/>
          </div>
          <div className='col'>
            <img src='images/plantes/jasmine-anteunis-cactus-4.jpg' alt='Jasmine Anteunis - Jardin acclimatation Paris cactus'/>
          </div>
          <div className='col'>
            <img src='images/plantes/jasmine-anteunis-plants-5.jpg' alt='Jasmine Anteunis - Beautiful Cactus and Plants'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/plantes/jasmine-anteunis-cactus-6.jpg' alt='Jasmine Anteunis - collection of cactus'/>
          </div>
          <div className='col-def'>
            <img src='images/plantes/jasmine-anteunis-cactus-7.jpg' alt='Jasmine Anteunis - When my cactus meet dinosaurs' />
          </div>
        </div>
      </div>
    );
  }

}
