import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Navigate,
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import Resume from './routes/Resume/Resume';
import Home from './routes/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
    <Route
          path="/"
          element={<Navigate to="home" />}
        />
      <Route path="/" element={<App/>}>
        <Route path="home" element={<Home/>} />
        <Route path="resume" element={<Resume/>} />
      </Route>
    </Routes>
  </HashRouter>
);
reportWebVitals();
