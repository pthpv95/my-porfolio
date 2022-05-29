import React from 'react';
import AnimatePage from './shared/component/AnimatePage';

const Portfolio = () => {
  const projects = [{
    title: 'STASH Employee Benefit',
    timeline: 'Jan 2022 – Present',
    description: ['Working closely with Product Managers and developers to ensure STASH is building best possible technical solutions',
      'Building a highly efficient configurable modules to reduce development efforts.', 'Writing and maintaining tests'],
    tech: 'Nodejs, ReactJS, Typescript, MongoDB, AWS, Serverless framework'
  }, {
    title: 'Digital Advice (360F, Zurich)',
    timeline: 'Jan 2021 – Sep 2021',
    description: ['• Working as fullstack developer', '• Build web interfaces that are fast, easy to use and built with best practice.', '• Design BE system to support multi-tenant.'],
    tech: 'Nodejs, ReactJS, Sailjs, Azure, Kubernetes, MySQL'
  }, {
    title: 'Luminor',
    timeline: 'May 2021 – Dec 2021',
    description: ['• Build front office for a cross-border payment platform for businesses to make payment overseas',
      '• Build web interfaces that are fast, easy to use and built with best practice.', '• Implement enhancements that improved web functionality and responsiveness.'],
    tech: ' ReactJS, Typescript, Material UI'
  },
  {
    title: 'Ontrack (Kaplan Professional)',
    timeline: 'Jul 2019 – Dec 2020',
    description: ['• Make the detailed designs for assigned tasks',
      '• Perform full unit test on the assigned tasks', '• Writing and implementing efficient and secure code'],
    tech: '.NET CORE, Microservices, ReactJS, AWS'
  }]

  return (
    <AnimatePage>
      <div className='page-work'>
        <p className="page-work__heading">
          Recent projects
        </p>
        <div className="page-work__container">
          {projects.map((project, idx) => (
            <div key={project.title} className={`page-work__box page-work__item--${idx + 1}`}>
              <div className="page-work__box--heading">
                <p className="page-work__box--title">{project.title}</p>
                <p className="page-work__box--timeline">
                  {project.timeline}
                </p>
              </div>
              {project.description.map((item, idx) => (
                <p key={idx} className="page-work__box--description">
                  {item}
                </p>
              ))}
              <h3 className="page-work__box--tech">
                Technical: {project.tech}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </AnimatePage>
  );
};
export default Portfolio