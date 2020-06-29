import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header'
import Body from './components/Body'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);

