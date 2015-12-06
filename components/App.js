import React from 'react';
import FunnyLink from './FunnyLink.js';
import ExternalLink from './ExternalLink.js';
import Modal from './Modal.js';
import SocksModal from './modals/SocksModal.js';
import PlantsModal from './modals/PlantsModal.js';
import OvallModal from './modals/OvallModal.js';
import DanoneModal from './modals/DanoneModal.js';
import ArtModal from './modals/ArtModal.js';

if (process.env.ISBROWSER) {
  require('../styles/app.scss');
}

export default class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalContent: null
    };
  }

  componentDidMount () {
  	var images = [
      'images/plantes/jasmine-anteunis-plants-1.jpg',
      'images/plantes/jasmine-anteunis-cactus-2.jpg',
      'images/plantes/jasmine-anteunis-plants-5.jpg',
      'images/plantes/jasmine-anteunis-cactus-4.jpg',
      'images/plantes/jasmine-anteunis-cactus-7.jpg',
      'images/plantes/jasmine-anteunis-cactus-6.jpg',
      'images/plantes/jasmine-anteunis-plants-3.jpg',
      'images/ovall/10.jpg',
      'images/ovall/12.jpg',
      'images/ovall/banner.jpg',
      'images/ovall/9.jpg',
      'images/ovall/11.jpg',
      'images/ovall/8.jpg',
      'images/ovall/6.jpg',
      'images/ovall/5.jpg',
      'images/ovall/3.jpg',
      'images/ovall/2.jpg',
      'images/ovall/7.jpg',
      'images/ovall/4.jpg',
      'images/ovall/1.jpg',
      'images/socks/jasmine-anteunis-collection-socks.jpg',
      'images/art/jasmine-anteunis-pattern-6.jpg',
      'images/art/jasmine-anteunis-edition-2.jpg',
      'images/art/jasmine-anteunis-martens.jpg',
      'images/art/jasmine-anteunis-pattern-4.jpg',
      'images/art/jasmine-anteunis-spaceship.jpg',
      'images/art/jasmine-anteunis-pattern-1.jpg',
      'images/art/jasmine-anteunis-pattern-2.jpg',
      'images/art/jasmine-anteunis-pattern-5.jpg',
      'images/art/jasmine-anteunis-baroca-1.jpg',
      'images/art/jasmine-anteunis-baroca-2.jpg',
      'images/art/jasmine-anteunis-edition-3.jpg',
      'images/art/jasmine-anteunis-edition-1.jpg',
      'images/art/jasmine-anteunis-baroca-3.jpg',
      'images/art/jasmine-anteunis-pattern-3.jpg',
      'images/danone/insider-danone-jasmine-anteunis-6.jpg',
      'images/danone/insider-danone-jasmine-anteunis-8.jpg',
      'images/danone/insider-danone-jasmine-anteunis-3.png',
      'images/danone/onboarding-animation-jasmine-anteunis-3.jpg',
      'images/danone/insider-danone-jasmine-anteunis-9.jpg',
      'images/danone/insider-danone-jasmine-anteunis-5.jpg',
      'images/danone/insider-danone-jasmine-anteunis-1.png',
      'images/danone/insider-danone-jasmine-anteunis-4.png',
      'images/danone/onboarding-animation-jasmine-anteunis-1.jpg',
      'images/danone/onboarding-animation-jasmine-anteunis-2.jpg',
      'images/danone/insider-danone-jasmine-anteunis-2.png'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  closeModal () {
    this.setState({
      modal: false,
      modalContent: null
    });
  }

  openModal (component) {
    this.setState({
      modal: true,
      modalContent: component
    });
  }

  render () {
    return (
      <div className='App'>

      {this.state.modal && (
        <Modal component={this.state.modalContent} onClose={::this.closeModal}/>
      )}

      <header>
        <div>
          <h1>
            Jasmine Anteunis
          </h1>
          <h3 className="right">
            <a href="https://github.com/janteuni" className="i-link" target="_blank"><i className="icon-github"></i></a>
            <a href="https://dribbble.com/janteuni" className="i-link" target="_blank"><i className="icon-dribbble3"></i></a>
            <a href="https://www.behance.net/janteuni" className="i-link" target="_blank"><i className="icon-behance"></i></a>
            <a href="https://twitter.com/JasmineAnteunis" className="i-link" target="_blank"><i className="icon-twitter"></i></a>
            <a href="https://www.linkedin.com/in/janteuni" className="i-link" target="_blank"><i className="icon-linkedin"></i></a>
          </h3>
        </div>
      </header>

      <section className='summary'>
        <h2>I’m a 23 years old french<br />
        <span className='strike'>Art student</span> <em>Fullstack Developer</em><br />
        based in Paris.</h2>
      </section>

      <section className='description'>
        <p>
          I like designing things.<br />
          Between my studies in <FunnyLink onClick={this.openModal.bind(this, <ArtModal />)}>Art school</FunnyLink> in Aix-en-Provence and 42 in Paris, only the medium has changed. After an artistic residence in Portugal, collective exhibitions, I launched <FunnyLink onClick={this.openModal.bind(this, <OvallModal />)}>a clothing brand</FunnyLink> with a friend. My first project management experience, but also my first website.
        </p>
        <p>
          I’m now in my last year of study at 42 in Paris. A school where you learn to learn, especially to code.
          After the success of a Hackathon a small team was able to develop <FunnyLink onClick={this.openModal.bind(this, <DanoneModal />)}>a project</FunnyLink> at Danone. I was in charge of UX and Web design of the application.
          I’m currently working at <ExternalLink link='https://recast.ai'>Recast.AI</ExternalLink> in Paris as UX Designer.
        </p>
        <p>
          I am passionate about paper craft, it’s a great medium and joined my taste for the creation of a product that you master all aspects of the design. Graphic design, publishing, bookbinding and serigraphy are my hobby.
          I like collecting things, and I never throw anything, this requires research and organisation to keep all these inpirations sources around me.
          <br/>And I really like <FunnyLink onClick={this.openModal.bind(this, <SocksModal />)}>my socks</FunnyLink>, <FunnyLink onClick={this.openModal.bind(this, <PlantsModal />)}>my cactus</FunnyLink> and all my Sci-Fi books.
        </p>
      </section>

      <footer>
        <img src="images/jasmine-anteunis.png" alt="Jasmine Anteunis - Say Hello!" />
        <ExternalLink link="mailto:jasmine@anteunis.name">Say Hello!</ExternalLink>
      </footer>

      </div>
    );
  }

}
