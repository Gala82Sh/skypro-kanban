import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;