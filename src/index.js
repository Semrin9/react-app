import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Auth0Provider
    domain='dev-jlklw5bmb0fhk33g.us.auth0.com'
    clientId='xaOKaip7PEqMSvLIC7wYZvqczhd55tOQ'
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
