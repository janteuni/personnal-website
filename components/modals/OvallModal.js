import React from 'react';
import ExternalLink from '../ExternalLink.js';

export default class OvallClass extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='OvallClass'>
        <div className='row'>
          <div className='col-def'>
            <img src='images/ovall/banner.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className="col-def card std-size">
            <h3>Ovall</h3>
            <p>
              Ovall created from forgotten clothes and jewelry, unique pieces.<br />
              A two-year experiment on the creation of a brand identity, design clothes and website, communication and collaboration.
              <br /><ExternalLink link='http://www.ovall.fr'>view the website</ExternalLink>
            </p>
          </div>
        </div>
        <div className='row row-end'>
          <div className='col-def'>
            <img src='images/ovall/7.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/6.jpg' />
          </div>
        </div>
        <div className='row row-end'>
          <div className='col-def'>
            <img src='images/ovall/3.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/4.jpg' />
          </div>
        </div>
        <div className='row sm-wrap'>
          <div className='col-def'>
            <img src='images/ovall/10.jpg' />
          </div>
          <div className='row'>
            <div className='col-def'>
              <img src='images/ovall/11.jpg' />
            </div>
            <div className='col-def'>
              <img src='images/ovall/12.jpg' />
            </div>
          </div>
        </div>
        <div className='row row-end sm-wrap'>
          <div className='col-def'>
            <img src='images/ovall/1.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/2.jpg' />
          </div>
        </div>
        <div className='row row-wrap'>
          <div className='col-def'>
            <img src='images/ovall/5.jpg' />
          </div>
          <div className='col card row row-column row-center'>
            <h2 className='center title mb2'>A project<br />with many friends<br /> collaborators</h2>
            <ExternalLink link='http://cleolheritier.com/'>Cléo Lhéritier</ExternalLink>
            <ExternalLink link='http://manonrougier.blogspot.fr/'>Manon Rougier</ExternalLink>
            <ExternalLink link='http://www.mathieufabien.fr/'>Fabien Mathieu</ExternalLink>
            <ExternalLink link='http://patimomorgan.com/'>Morgan Patimo</ExternalLink>
            <ExternalLink link='http://maelysrebuttini.tumblr.com/'>Maelys Rebuttini</ExternalLink>
          </div>
        </div>
        <div className='row sm-wrap'>
          <div className='col-def'>
            <img src='images/ovall/8.jpg' />
          </div>
          <div className='col-def'>
            <img src='images/ovall/9.jpg' />
          </div>
        </div>
      </div>
    );
  }

}
