import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeContract } from "./utils/near";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

window.nearInitPromise = initializeContract()
  .then(() => {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.error);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
