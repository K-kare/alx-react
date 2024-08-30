import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import logo from './holberton-logo.png'; // Assuming the logo image is in the src directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}
export default App;
