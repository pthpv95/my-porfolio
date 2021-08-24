import React from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import AnimatePage from './shared/component/AnimatePage';

const Portfolio = () => {
  const router = useRouter()
  return (
    <AnimatePage>
      <div className='page-work'>
        <h4 className="page-work__heading">
          Working experience highlights
        </h4>
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
              • Working as fullstack developer.
            </p>
            <p className="page-work__box--description">
              • Build web interfaces that are fast, easy to use and built with best practice.
            </p>
            <p className="page-work__box--description">
              • Design BE system to support multi-tenant.
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
              • Working as fullstack developer.
            </p>
            <p className="page-work__box--description">
              • Build web interfaces that are fast, easy to use and built with best practice.
            </p>
            <p className="page-work__box--description">
              • Design BE system to support multi-tenant.
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
              Technical: Reactjs,, Nodejs, Webpack, Docker, Cordova, Jenkins, Jest
            </h3>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};
export default Portfolio