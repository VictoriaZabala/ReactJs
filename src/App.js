import logo from './logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pawttery
        </p>
        <a
          className="App-link"
          href="https://www.pawttery.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro sitio ❤︎
        </a>
      </header>
    </div>
  );
}

export default App;
