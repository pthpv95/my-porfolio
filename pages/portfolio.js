import React from 'react';
import AnimatePage from './shared/component/AnimatePage';

const Portfolio = () => {
  return (
    <AnimatePage>
      <div className='page-work'>
        <p className="page-work__heading">
          Working experience
        </p>
        <div className="page-work__container">
          <div className="page-work__box page-work__item--1">
            <div className="page-work__box--heading">
              <p className="page-work__box--title">Digital Advice (360F, Zurich)</p>
              <p className="page-work__box--timeline">
                Jan 2021 – Present
              </p>
            </div>
            <p className="page-work__box--description">
              • Working as fullstack developer.
            </p>
            <p className="page-work__box--description">
              • Build web interfaces that are fast, easy to use and built with best practice.
            </p>
            <p className="page-work__box--description">
              • Design BE system to support multi-tenant.
            </p>
            <h3 className="page-work__box--tech">
              Technical: Nodejs, ReactJS, Sailjs, Azure, Kubernetes, MySQL
            </h3>
          </div>
          <div className="page-work__box page-work__item--2">
            <div className="page-work__box--heading">
              <p className="page-work__box--title">Luminor</p>
              <p className="page-work__box--timeline">
                May 2021 – Present
              </p>
            </div>
            <p className="page-work__box--description">
              • Build front office for a cross-border payment platform for businesses to make payment overseas.
            </p>
            <p className="page-work__box--description">
              • Build web interfaces that are fast, easy to use and built with best practice.
            </p>
            <p className="page-work__box--description">
              • Implement enhancements that improved web functionality and responsiveness.
            </p>
            <h3 className="page-work__box--tech">
              Technical:  ReactJS, Typescript, Material UI
            </h3>
          </div>
          <div className="page-work__box page-work__item--3">
            <div className="page-work__box--heading">
              <p className="page-work__box--title">Ontrack (Kaplan Professional)</p>
              <p className="page-work__box--timeline">
                Jul 2019 – Dec 2020
              </p>
            </div>
            <p className="page-work__box--description">
              • Make the detailed designs for assigned tasks
            </p>
            <p className="page-work__box--description">
              • Perform full unit test on the assigned tasks
            </p>
            <p className="page-work__box--description">
              • Writing and implementing efficient and secure code;
            </p>
            <p className="page-work__box--tech">
              Technical: .NET CORE, Microservices, ReactJS, AWS
            </p>
          </div>
          <div className="page-work__box page-work__item--4">
            <div className="page-work__box--heading">
              <p className="page-work__box--title">Perfect Advice (AXA)</p>
              <p className="page-work__box--timeline">
                Mar 2018 – Jun 2019
              </p>
            </div>
            <p className="page-work__box--description">
              • Working as fullstack developer.
            </p>
            <p className="page-work__box--description">
              • Build web interfaces that are fast, easy to use and built with best practice.
            </p>
            <p className="page-work__box--description">
              • Design BE system to support multi-tenant.
            </p>
            <h3 className="page-work__box--tech">
              Technical: Reactjs, Nodejs, Webpack, Docker, Cordova, Jenkins, Jest
            </h3>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};
export default Portfolio