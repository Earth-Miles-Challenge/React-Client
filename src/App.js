import { useSelector } from 'react-redux';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
  DashboardPage,
  // JoinChallengePage,
  // SignUpPage,
  ConnectPage } from './pages';
import { selectCurrentUser } from 'features/users';

import './assets/style/style.scss';

function App() {
  const { t } = useTranslation();
  const { id } = useSelector(selectCurrentUser);
  const getUserNavLink = (userId) => userId
    ? <li><NavLink to="dashboard" className={({isActive}) => isActive ? 'active' : ''}>{t("nav.dashboard")}</NavLink></li>
    : <li><NavLink to="login" className={({isActive}) => isActive ? 'active' : ''}>{t("nav.login")}</NavLink></li>

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
            {getUserNavLink(id)}
          </ul>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </main>
      <footer>
        {t('footer.about')}
      </footer>
    </div>
  );
}

export default App;
