import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CardPage from './pages/CardPage';
import AddCardPage from './pages/AddCardPage';
import ExitPage from './pages/ExitPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

function AppRoutes() {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />

      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/add" element={<AddCardPage />} />
          <Route path="card/:id" element={<CardPage />} />
          <Route path="exit" element={<ExitPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;