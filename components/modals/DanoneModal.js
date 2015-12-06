import React from 'react';
import ExternalLink from '../ExternalLink.js'

export default class DanoneModal extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='DanoneModal'>
        <div className="row md-wrap align-end">
          <div className='col-def card'>
            <h1 className='title mb2'>
              Insider by Danone
            </h1>
            <p>
              An app to connect external candidates interested in Danone company and Danoners, based on areas of common interests. Danoners will also be able to connect among each other.
            </p>
            <p>
              The team was composed by 4 students from Ecole 42, IT & HR Danoners. We work for 5 months to design this app and the beta version will be launched soon!
            </p>
            <p>
              You can see here some flows to help define the user journeys, illustrations and screenshots.
            </p>
              <ExternalLink link={'http://insider.danone.com'}>view the web app</ExternalLink>
          </div>
          <div className="col-def">
            <img src="images/danone/insider-danone-jasmine-anteunis-6.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col-def">
            <img src="images/danone/insider-danone-jasmine-anteunis-5.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col-def">
            <img src="images/danone/insider-danone-jasmine-anteunis-9.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col-def">
            <img src="images/danone/insider-danone-jasmine-anteunis-8.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row sm-wrap">
          <div className="col">
            <img src="images/danone/onboarding-animation-jasmine-anteunis-1.jpg" alt="Onboarding for Insider by Danone"/>
          </div>
          <div className="col">
            <img src="images/danone/onboarding-animation-jasmine-anteunis-3.jpg" alt="Onboarding for Insider by Danone"/>
          </div>
          <div className="col">
            <img src="images/danone/onboarding-animation-jasmine-anteunis-2.jpg" alt="Onboarding for Insider by Danone"/>
          </div>
        </div>
        <div className="row row-center row-wrap bg-blue p2">
          <div className="m2">
            <img src="images/danone/insider-danone-jasmine-anteunis-1.png" alt="Insider by Danone"/>
          </div>
          <div className="m2">
            <img src="images/danone/insider-danone-jasmine-anteunis-3.png" alt="Insider by Danone"/>
          </div>
          <div className="m2">
            <img src="images/danone/insider-danone-jasmine-anteunis-2.png" alt="Insider by Danone"/>
          </div>
          <div className="m2">
            <img src="images/danone/insider-danone-jasmine-anteunis-4.png" alt="Insider by Danone"/>
          </div>
        </div>
      </div>
    );
  }

}
