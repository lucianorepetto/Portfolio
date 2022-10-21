import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Menu/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Outlet/>
      </header>
      
    </div>
  );
}

export default App;
