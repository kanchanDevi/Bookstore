import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<Auth0Provider
    domain="dev-p2yecuuofolibjzj.us.auth0.com"
    clientId="ideJRZ6znzBBewCAUIzV2fwfUZJ94vNF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);