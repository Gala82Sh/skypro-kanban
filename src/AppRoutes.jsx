import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CardPage from './pages/CardPage';
import AddCardPage from './pages/AddCardPage';
import ExitPage from './pages/ExitPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import { isAuthenticated } from './services/auth';

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
  
    setIsAuth(isAuthenticated());
  }, []);

  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

  return (
    <Routes>
      <Route path="/login" element={<SignInPage onLogin={handleLogin} />} />
      <Route path="/register" element={<SignUpPage onLogin={handleLogin} />} />

      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/add" element={<AddCardPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage onLogout={handleLogout} />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;