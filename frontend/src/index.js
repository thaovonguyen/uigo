import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import WelcomePage from './pages/welcome';
import reportWebVitals from './reportWebVitals';
// import Homepage from './pages/Homepage';
import LayoutSample from './pages/LayoutSample';
import ColorGenPage from './pages/ColorGen';

// import Navbar from './Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ColorGenPage /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
