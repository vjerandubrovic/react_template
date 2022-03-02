// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ROUTING
import { BrowserRouter } from 'react-router-dom';
// REDUX
// REDUCERS

// app JSX
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// Render app inside <div id=root> the public index.html 
ReactDOM.render( app, document.getElementById( 'root' ) );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
