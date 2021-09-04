import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const Navigation = () => {
  const checkboxRef = useRef()
  const router = useRouter()
  const onLinkClicked = (path) => {
    checkboxRef.current.click()
    router.push(path)
  }

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" ref={checkboxRef} />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link" onClick={() => onLinkClicked('/')}>Home</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link" onClick={() => onLinkClicked('/about')}>About</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link" onClick={() => onLinkClicked('/skills')}>Skills</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link" onClick={() => onLinkClicked('/portfolio')}>Work</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link" onClick={() => {
              window.open(
                'https://drive.google.com/file/d/1CiK5L1Kz8qOvfoWK85nQj4lMG-uFUb9A/view',
                '_blank'
              );
            }}>Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;