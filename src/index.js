import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='logoContainer'>
      <img
        src='https://www.gradiweb.com/wp-content/uploads/2019/04/logo.png'
        alt='logo'
        className='logo'
      />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
