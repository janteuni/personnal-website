import React from 'react';
import FunnyLink from './FunnyLink.js';
import Modal from './Modal.js';
import SocksModal from './modals/SocksModal.js';
import '../styles/app.scss';

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
        <h1>
          <FunnyLink onClick={this.openModal.bind(this, <SocksModal />)}>
            Jasmine Anteunis
          </FunnyLink>
        </h1>
      </header>

      <section className='summary'>
        <h2>I’m a 23 years old french<br />
        <span className='strike'>Art student</span> <em>Fullstack Developer</em><br />
        based in Paris.</h2>
      </section>

      <section className='description'>
        <p>
          I like designing things.<br />
          Between my studies in <FunnyLink>Art school</FunnyLink> in Aix-en-Provence and 42 in Paris, only the medium has changed. After an artistic residence in Portugal, collective exhibitions, I launched a clothing brand with a friend. My first project management experience, but also my first website.
        </p>
        <p>
          I’m now in my last year of study at 42 in Paris. A school where you learn to learn, especially to code.
          After the success of a Hackathon a small team was able to develop a project at Danone. I was in charge of UX and Web design of the application.
          I’m currently working at Beamind in Paris as UX Designer.
        </p>
        <p>
          I am passionate about paper craft, it’s a great medium and  joined my taste for the creation of a product that you master all aspects of the design. Graphic design, publishing, bookbinding and serigraphy are my hobby.
          I like collecting things, and I never throw anything, this requires research and organisation to keep all these inpirations sources around me.  And I really like my socks, my cactus and all my Sci-Fi books.
        </p>
      </section>

      </div>
    );
  }

}
