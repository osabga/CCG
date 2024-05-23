import React from 'react';
import ReactDOM from 'react-dom';
import './input.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
