import React from 'react';
import AnimatePage from './shared/component/AnimatePage';

const Skills = () => {
  return (
    <AnimatePage>
      <div className="skill-page">
        <div className="skill-page__left">
          <p className="skill-page__left--heading">
            Skills & Experience
          </p>
          <p className="skill-page__left--description">
            I have been working as fullstack developer for 4 years developing robust software for high-volume businesses.
          </p>
          <p className="skill-page__left--description">
            I have successfully deliver a lot of projects that fast, provide great user experience follow best practices.
          </p>
          <p className="skill-page__left--description">
          </p>
        </div>
        <div className="skill-page__right">
          <div className="skill-page__level">
            <label>Frontend</label>
            <div className="skill-page__level--fe"></div>
          </div>
          <div className="skill-page__level">
            <label>Backend</label>
            <div className="skill-page__level--be"></div>
          </div>
          <div className="skill-page__level">
            <label>ReactJS</label>
            <div className="skill-page__level--react"></div>
          </div>
          <div className="skill-page__level">
            <label>NodeJS</label>
            <div className="skill-page__level--node"></div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Skills;