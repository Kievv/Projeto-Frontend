import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserContextProvider } from './contexts/UserContext';
import { RemediosContextProvider } from './contexts/RemediosContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RemediosContextProvider>
        <App />
      </RemediosContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
