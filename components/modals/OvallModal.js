import React from 'react';

export default class OvallClass extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='OvallClass'>
        <div className='row'>
          <div className='col'>
            <img src='images/ovall/banner.jpg' />
          </div>
        </div>
        <div className='row'>
          <div className="col card std-size">
            <h3>Ovall</h3>
            <p>
              I’m now in my last year of study at 42 in Paris. A school where you learn to learn, especially to code. After the success of a Hackathon a small team was able to develop a project at Danone.
              <a href='http://www.ovall.fr'>view the website</a>
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
            <h2 className='center title'>A project<br />with many friends<br /> collaborators</h2>
            <p><a href='http://cleolheritier.com/' target='_blank'>Cléo Lhéritier</a></p>
            <p><a href='http://manonrougier.blogspot.fr/' target='_blank'>Manon Rougier</a></p>
            <p><a href='http://www.mathieufabien.fr/' target='_blank'>Fabien Mathieu</a></p>
            <p><a href='http://patimomorgan.com/' target='_blank'>Morgan Patimo</a></p>
            <p><a href='http://maelysrebuttini.tumblr.com/' target='_blank'>Maelys Rebuttini</a></p>
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
