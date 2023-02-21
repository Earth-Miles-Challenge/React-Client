import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomePage, StartPage, JoinChallengePage, SignUpPage } from './pages';

import './assets/style/style.scss';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="header">
        <div className="brand">
          <Link to="/">
            <img src='/logo438x117.png' className="logo" alt="Earth Miles Challenge logo" />
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
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartPage />} />
          {/* <Route path="start" element={<SignUpPage />} /> */}
          {/* <Route path="athletes" element={<AthletesPage />} /> */}
          <Route path="join-challenge" element={<JoinChallengePage />} />
        </Routes>
      </main>
      <footer>
        {t('footer.about')}
      </footer>
    </div>
  );
}

export default App;
