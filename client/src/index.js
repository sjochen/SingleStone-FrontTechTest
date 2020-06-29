import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Lato-Light.ttf'
import './index.css';
import App from './components/App';
import Header from './components/Header';
import Body from './components/Body';
import Button from './components/Button';
import HowItWorks from './components/HowItWorks';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Button />
    <HowItWorks />
  </React.StrictMode>,
  document.getElementById('root')
);

