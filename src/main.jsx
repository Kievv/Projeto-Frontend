import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserContextProvider } from './contexts/UserContext';
import { RemediosContextProvider } from './contexts/RemediosContext';
import { ExamesContextProvider } from './contexts/ExamesContext';
import { ConsultasContextProvider } from './contexts/ConsultasContext';
import { DialogProvider } from 'react-dialog-confirm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <DialogProvider>
        <RemediosContextProvider>
          <ExamesContextProvider>
            <ConsultasContextProvider>
              <App />
            </ConsultasContextProvider>
          </ExamesContextProvider>
        </RemediosContextProvider>
      </DialogProvider>
    </UserContextProvider>
  </React.StrictMode>
);
