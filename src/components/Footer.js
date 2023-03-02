import React from 'react';
import GitHubIcon from '../assets/github-icon.svg';

function Footer() {
  return (
    <footer>
      <p>
        <img src={GitHubIcon} alt="GitHub icon" />
        Created by{' '}
        <a href="https://github.com/nelrnd" target="_blank" rel="noreferrer">
          Nel
        </a>
      </p>
    </footer>
  );
}

export default Footer;
