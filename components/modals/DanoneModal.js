import React from 'react';

export default class DanoneModal extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='DanoneModal'>
        <p>
          <em>Insider by Danone</em> is an app to connect external candidates interested in Danone company and Danoners, based on areas of common interests. Danoners will also be able to connect among each other.
        </p>
        <p>
          The team was composed by 4 students from Ecole 42, IT & HR Danoners. We work for 5 months to design this app and the beta version will be launched soon!
        </p>
        <p>
          You can see here some flows to help define the user journeys, illustrations and screenshots.
        </p>
        <a href="http://insider.danone.com/" target=""_blank>view the webapp</a>
        <div className="row">
          <div className="col">
            <img src="images/danone/insider-6.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="images/danone/insider-5.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row marged-top">
          <div className="col">
            <img src="images/danone/insider-9.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="images/danone/insider-8.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="images/danone/ob-1.jpg" alt="Onboarding for Insider by Danone"/>
          </div>
          <div className="col">
            <img src="images/danone/ob-3.jpg" alt="Onboarding for Insider by Danone"/>
          </div>
          <div className="col">
            <img src="images/danone/ob-2.jpg" alt="Onboarding for Insider by Danone"/>
          </div>
        </div>
        <div className="row marged-top">
          <div className="col">
            <img src="images/danone/insider-1.jpg" alt="Insider by Danone"/>
          </div>
          <div className="col">
            <img src="images/danone/insider-3.jpg" alt="Insider by Danone"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="images/danone/insider-2.jpg" alt="Insider by Danone"/>
          </div>
          <div className="col">
            <img src="images/danone/insider-4.jpg" alt="Insider by Danone"/>
          </div>
        </div>
      </div>
    );
  }

}
