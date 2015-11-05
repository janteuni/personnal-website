import React from 'react';

export default class ArtModal extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='ArtModal'>
        <div className='row align-end sm-wrap'>
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
        <div className='row row-end'>
          <div className='col-def card row row-center' style={{width: 1059, maxWidth: '100%' }}>
            <div>
              <p className='center'>"Cette surface mouvante où les repères se dispersent"  <i>Didier Arnaudet</i></p>
            </div>
          </div>
        </div>
        <div className='row sm-wrap'>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-pattern-1.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-pattern-2.jpg' />
          </div>
        </div>
        <div className='row sm-wrap'>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-baroca-1.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-baroca-2.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-baroca-3.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className='col-def card row row-center' style={{width: 610, maxWidth: '100%' }}>
            <div>
              <p className='center'>"Les étoiles elles-mêmes paraissent floues. D’un endroit indéterminé leur vint l’impression vague qu’une machine gigantesque rassemblait ses forces dans l’épaisseur des cloisons, emmagasinant de l’énergie pour un bond prodigieux, gravissant pas à pas les échelons d’une puissance colossale."  <i>Isaac Asimov, Les Robots</i></p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-def'>
            <img src='images/art/jasmine-anteunis-spaceship.jpg' />
          </div>
        </div>
      </div>
    );
  }

}
