import React from 'react';
import AnimatePage from './shared/component/AnimatePage';

const About = () => {
  return (
    <AnimatePage>
      <div className="about-page">
        <p className="about-page__heading">All about me :)</p>
        <p className="about-page__description">I&apos;m a fullstack developer located in Vietnam. I have a great passion for building cool things on website.</p>
        <p className="about-page__description">A quick learner, well-organizer person, a problem solver with high attention to detail. A big fan of football and tennis.</p>
      </div>
    </AnimatePage>
  );
};

export default About;