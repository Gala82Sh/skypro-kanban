import { useEffect } from 'react';
import AppRoutes from './AppRoutes';
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
      <AppRoutes />
    </div>
  );
}

export default App;