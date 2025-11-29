// src/App.jsx
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import Features from './Pages/Features';
import LoginRoleModal from './Components/LoginRoleModal';
import UserLogin from './Pages/UserLogin';
import UserDashboard from './Pages/UserDashboard';
import GovLogin from './Pages/GovLogin';
import GovDashboard from './Pages/GovDashboard';
import SocialPost from './Pages/SocialPost';          // NEW
import FactCheckAgent from './Pages/FactCheckAgent';  // NEW

const AppShell = () => {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const location = useLocation();

  const openRoleModal = () => setShowRoleModal(true);
  const closeRoleModal = () => setShowRoleModal(false);

  const handleSelectRole = (role) => {
    setShowRoleModal(false);
    if (role === 'gov') {
      window.location.href = '/gov-login';
    } else {
      window.location.href = '/user-login';
    }
  };

  // hide navbar on auth + dashboard routes + overlays
  const isAuthRoute =
    location.pathname === '/user-login' ||
    location.pathname === '/gov-login' ||
    location.pathname === '/user-dashboard' ||
    location.pathname === '/gov-dashboard' ||
    location.pathname === '/social-post' ||       // NEW
    location.pathname === '/fact-check-agent';    // NEW

  return (
    <div className="app-root">
      {!isAuthRoute && <Navbar onLoginClick={openRoleModal} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <section id="home">
                  <Landing onLoginClick={openRoleModal} />
                </section>
                <section id="features">
                  <Features />
                </section>
              </main>

              <LoginRoleModal
                open={showRoleModal}
                onClose={closeRoleModal}
                onSelectRole={handleSelectRole}
              />
            </>
          }
        />

        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/gov-login" element={<GovLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/gov-dashboard" element={<GovDashboard />} />

        {/* NEW endpoints */}
        <Route path="/social-post" element={<SocialPost />} />
        <Route path="/fact-check-agent" element={<FactCheckAgent />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
