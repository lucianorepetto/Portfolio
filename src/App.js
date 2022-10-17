import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This Page is in Progress.
        </p>
        <Outlet/>
      </header>
      
    </div>
  );
}

export default App;
