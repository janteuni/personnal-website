import React from 'react';

export default class ArtModal extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='ArtModal'>
        <div className='row align-end'>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-martens.jpg' />
          </div>
          <div className='col-def card row row-center'>
            <div>
              <h2 className='center title'>Les Martens</h2>
              <p className='center'>Edition: Family photographs and texts</p>
            </div>
          </div>
        </div>
        <div className='row sm-wrap'>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-edition-1.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-edition-2.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-edition-3.jpg' />
          </div>
        </div>
        <div className='row row-end'>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-pattern-3.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-pattern-4.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-pattern-5.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-pattern-6.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src='images/art/jasmine-anteunis-martens.jpg' />
          </div>
        </div>
      </div>
    );
  }

}
