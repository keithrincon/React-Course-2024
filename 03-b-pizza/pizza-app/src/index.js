import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

function App() {
  return <h1>Pizza App</h1>;
}
// How to render a React app using createRoot IN REACT 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
