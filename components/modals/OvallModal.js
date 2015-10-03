import React from 'react';

export default class OvallClass extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='OvallClass'>
        <h3>Ovall</h3>
        <p></p>
        <a href='http://www.ovall.fr'>view the website</a>
        <div className='row'>
          <div className='col'>
            <img src='images/ovall/banner.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/ovall/7.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/6.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/ovall/3.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/4.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/ovall/10.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/11.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/12.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/ovall/1.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/2.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/ovall/5.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src='images/ovall/8.jpg' />
          </div>
          <div className='col'>
            <img src='images/ovall/9.jpg' />
          </div>
        </div>
      </div>
    );
  }

}
