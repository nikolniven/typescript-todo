import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // Tailwind styles

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Root element not found. Did you forget to add a div with id="root" to your HTML?',
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
