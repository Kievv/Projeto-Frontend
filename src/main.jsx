import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserContextProvider } from './contexts/UserContext';
import { RemediosContextProvider } from './contexts/RemediosContext';
import { ExamesContextProvider } from './contexts/ExamesContext';
import { ConsultasContextProvider } from './contexts/ConsultasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RemediosContextProvider>
        <ExamesContextProvider>
          <ConsultasContextProvider>
            <App />
          </ConsultasContextProvider>
        </ExamesContextProvider>
      </RemediosContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
