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
          I am passionate about paper craft, it’s a great medium and  joined my taste for the creation of a product that you master all aspects of the design. Graphic design, publishing, bookbinding and serigraphy are my hobby.
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
