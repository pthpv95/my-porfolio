import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import GithubIcon from './component/icons/GithubIcon';
import LinkedInIcon from './component/icons/LinkedInIcon';
import TwitterIcon from './component/icons/TwitterIcon';
import Navigation from './component/Navigation';

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <div className="container">
      <Head>
        <title>HIEN PHAM | Web developer </title>
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>
      <Navigation />
      <div className="main-menu">
        <div className="main-menu__top" onClick={() => {
          router.push('/')
        }}>
          <div className="main-menu__top--photo">
            <Image src="/assets/img/me_working_at_coffee_shop.JPG" width={90} height={90} alt="myself" />
          </div>
          <p className="main-menu__top--name">Hien Pham</p>
          <p className="main-menu__top--title">Web Developer</p>
        </div>
        <div className="main-menu__nav">
          <div onClick={() => {
            router.push('/about')
          }}>About</div>
          <div onClick={() => {
            router.push('/skills')
          }}>Skills</div>
          <div onClick={() => {
            router.push('/portfolio')
          }}>Work</div>
        </div>
        <div className="main-menu__social">
          <div className="main-menu__social--item">
            <a href="https://github.com/pthpv95" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </div>
          <div className="main-menu__social--item">
            <a href="https://www.linkedin.com/in/pthpv95" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <div className="main-menu__social--item">
            <a href="https://twitter.com/pthpv95" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;