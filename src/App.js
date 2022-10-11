//import { Provider } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { JoinChallengePage, AthletesPage, SignUpPage } from './pages';

import './assets/style/style.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="brand">
          <Link to="/">
            <img src='/logo54.png' className="logo" alt="logo" />
            <div className="site-title">Earth Miles Challenge</div>
          </Link>
        </div>
        <nav>
          <ul>
            {/* <li><NavLink to="athletes" className={({isActive}) => isActive ? 'active' : ''}>Athletes</NavLink></li> */}
            {/* <li><NavLink to="start" className={({isActive}) => isActive ? 'active' : ''}>Sign Up</NavLink></li> */}
          </ul>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          {/* <Route path="start" element={<SignUpPage />} /> */}
          <Route path="athletes" element={<AthletesPage />} />
          <Route path="join-challenge" element={<JoinChallengePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
