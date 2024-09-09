import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const style = StyleSheet.create({
  body: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  footer: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    backgroundColor: '#ccc',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});


export default App;
