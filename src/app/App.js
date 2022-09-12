//import { Provider } from 'react';
import { Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { SignUpPage } from '../features/signUp/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="brand">
          <Link to="/">
            <img src='/logo54.png' className="logo" alt="logo" />
            <h1>Earth Miles Challenge</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><NavLink to="athletes" className={({isActive}) => isActive ? 'active' : ''}>Athletes</NavLink></li>
            <li><NavLink to="join" className={({isActive}) => isActive ? 'active' : ''}>Sign Up</NavLink></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="join" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
