import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { INVITE_LINK } from './config';

// Temporary log to verify the invite URL is built correctly
console.log('Discord Invite URL:', INVITE_LINK);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
